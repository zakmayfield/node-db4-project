const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getRecipeById(id) {
  return db('recipes')
    .where("id", id)
    .first();
}

function getShoppingList(id) {
  return db('recipe_ingredients')
    .select('recipe_ingredients.quantity as quantity', 'ingredients.name as ingredient', 'recipes.name as recipe')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
    .where('recipe_ingredients.recipe_id', id)
}

function getInstructions(id) {
  return db('steps')
    .select('steps.step_number', 'steps.description')
    .join('recipes', 'steps.recipe_id', 'recipes.id')
    .orderBy('steps.step_number')
    .where('recipe_id', id);
}