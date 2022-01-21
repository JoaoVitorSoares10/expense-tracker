const express = require('express');
const routes = express.Router();
const item = require('../controllers/item.controller');

routes.get('/', item.getItem);
routes.post('/add', item.registerItem);

module.exports = routes;