const restaurantService = require('../services/restaurants.service');
const SearchLog = require('../models/searchLog.model');

exports.search = async (req, res, next) => {
  try {
    const results = await restaurantService.search(req.params.searchTerm);
    await new SearchLog({
      searchTerm: req.params.searchTerm,
      userId: req.user,
    }).save();
    return res.json({ restaurants: results });
  } catch (error) {
    return next(error);
  }
};
