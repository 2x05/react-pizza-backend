const PizzaController = require('../controllers/pizzaController');
const express = require('express');
const router = express.Router();

router.get('/', PizzaController.getAllPizzas);

module.exports = router;
