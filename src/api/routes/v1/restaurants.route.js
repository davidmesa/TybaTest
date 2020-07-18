const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/restaurants.controller');
const { authorize, LOGGED_SERVICES } = require('../../middlewares/auth');
const { restaurantsSearch } = require('../../validations/restaurants.validation');

const router = express.Router();

router
  .route('/:searchTerm')
  .get(authorize(LOGGED_SERVICES), validate(restaurantsSearch), controller.search);


module.exports = router;
