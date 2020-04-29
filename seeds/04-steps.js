
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //Mac n Cheese seed
        {
          step_number: 1,
          description: "Boil pasta for 10 minutes",
          recipe_id: 2
        },
        {
          step_number: 2,
          description: "Strain pasta, reserving 1 cup of cooking liquid",
          recipe_id: 2
        },
        {
          step_number: 3,
          description: "Add strained pasta to empty pot, along with a quarter of the cooking liquid",
          recipe_id: 2
        },
        {
          step_number: 4,
          description: "Add butter",
          recipe_id: 2
        },
        {
          step_number: 5,
          description: "Stir until pasta is coated",
          recipe_id: 2
        },
        {
          step_number: 6,
          description: "Stir in cheese until melted to desired consistency",
          recipe_id: 2
        },
        {
          step_number: 7,
          description: "Serve!",
          recipe_id: 2
        },
        
        //Pizza seed
        {
          step_number: 1,
          description: "Prepare your dough",
          recipe_id: 1
        },
        {
          step_number: 2,
          description: "Spread your sauce",
          recipe_id: 1
        },
        {
          step_number: 3,
          description: "Top with cheese",
          recipe_id: 1
        },
        {
          step_number: 4,
          description: "Top with tomatoes and olives",
          recipe_id: 1
        },
        {
          step_number: 5,
          description: "Bake for 20 minutes",
          recipe_id: 1
        },
        {
          step_number: 6,
          description: "Slice and serve!",
          recipe_id: 1
        },

        //Ceasar Salad seed
        {
          step_number: 1,
          description: "Tear your lettuce to bite sized pieces",
          recipe_id: 3
        },
        {
          step_number: 2,
          description: "To the bowl, add your lettuce and top with Ceasar",
          recipe_id: 3
        },
        {
          step_number: 3,
          description: "Serve!",
          recipe_id: 3
        },

        //Popcorn seed
        {
          step_number: 1,
          description: "Microwave for 1:30 - 2:00 minutes",
          recipe_id: 4
        },
        {
          step_number: 2,
          description: "Add to bowl",
          recipe_id: 4
        },
        {
          step_number: 3,
          description: "Serve!",
          recipe_id: 4
        },
      ]);
    });
};
