
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: "50ml"
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: "500g"
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          quantity: "10"
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          quantity: "100g"
        },
        {
          recipe_id: 1,
          ingredient_id: 10,
          quantity: "50g"
        },
        {
          recipe_id: 4,
          ingredient_id: 1,
          quantity: "A large pinch"
        },
        {
          recipe_id: 4,
          ingredient_id: 2,
          quantity: "25ml"
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          quantity: "500g"
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          quantity: "50ml"
        },
        {
          recipe_id: 2,
          ingredient_id: 5,
          quantity: "150g"
        }
      ]);
    });
};
