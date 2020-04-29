const express = require('express');

const recipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
  res.send('<h2>Server is running</h2>')
})

module.exports = server;