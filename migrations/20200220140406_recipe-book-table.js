
exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', recipes => {
      recipes.increments();
      recipes.string('name', 128)
        .notNullable();
      recipes.string('time', 244)
        .notNullable();
      recipes.string('description', 1024)
        .notNullable();
    })

    .createTable('ingredients', ingredients => {
      ingredients.increments();

      ingredients.string('name', 128)
        .notNullable();
    })

    .createTable('steps', steps => {
      steps.increments();
      steps.integer('step_number', 128)
        .notNullable();
      steps.string('description', 1024)
        .notNullable();
      //FK
      steps.integer('recipe_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.integer('recipe_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('ingredient_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('quantity', 128)
        .notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
