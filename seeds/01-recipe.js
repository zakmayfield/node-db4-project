
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: "Pizza",
          time: "30 Minutes",
          description: "A thin crust pizza"
        },
        {
          name: "Mac n Cheese",
          time: "25 Minutes",
          description: "Super cheesy"
        },
        {
          name: "Ceasar Salad",
          time: "5 Minutes",
          description: "Delicious"
        },
        {
          name: "Popcorn",
          time: "2 Minutes",
          description: "Nice n salty"
        }
      ]);
    });
};
