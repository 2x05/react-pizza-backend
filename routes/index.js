const express = require('express');
const router = express.Router();

const pizzaRouter = require('./pizzaRouter');

router.use('/pizzas', pizzaRouter);

module.exports = router;
