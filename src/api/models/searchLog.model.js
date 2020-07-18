const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../utils/APIError');

const searchLogSchema = new mongoose.Schema({
  searchTerm: {
    type: String,
    match: /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/,
    required: true,
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

searchLogSchema.method({
  transform() {
    const transformed = {};
    const fields = ['searchTerm', 'userId', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

searchLogSchema.statics = {

  async get(id) {
    try {
      let searchLog;

      if (mongoose.Types.ObjectId.isValid(id)) {
        searchLog = await this.findById(id).exec();
      }
      if (searchLog) {
        return searchLog;
      }

      throw new APIError({
        message: 'Search Log does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
  list({
    page = 1, perPage = 30, user,
  }) {
    const options = omitBy({ user }, isNil);
    return this.where({ userId: options._id })
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

module.exports = mongoose.model('SearchLog', searchLogSchema);
