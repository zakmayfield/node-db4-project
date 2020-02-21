
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "Salt" },
        { name: "Butter" },
        { name: "Oil" },
        { name: "Onion" },
        { name: "Cheese" },
        { name: "Cherry tomatos" },
        { name: "Ceasar dressing" },
        { name: "Red leaf lettuce" },
        { name: "Black olives" },
        { name: "Red sauce" },
        { name: "Elbow pasta" }
      ]);
    });
};
