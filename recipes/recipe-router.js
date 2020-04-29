const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.get('/:id', (req, res) => {
  Recipes.getRecipeById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.get('/:id/ingredients', (req, res) => {
  const {id} = req.params;
  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

router.get('/:id/steps', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(steps => {
      res.status(200).json(steps)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error" })
    })
})

module.exports = router;