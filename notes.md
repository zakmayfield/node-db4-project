
## Workflow

- identify entities : nouns => tables
- identity properties : (column, field, attributes) => columns
- identify relationships => foreign keys `FK`

_______________________

### Notes about project / requirements

- **Bold** = entities (tables)
- `Highlighted` = properties (columns)
- *italic* = FK

_

- a way to manage **recipes**
- a way to manage **ingredients**
- a `recipe` could have more than one `ingredient` and the same ingredient can be used in multiple recipes
  - Example: "one stick of butter" "swiss cheese"
- when saving the ingredients for a recipe capture the `quantity` required for that ingredient as a floating number
- have a way to save `steps` of **instructions** for preparing a recipe

________________________

### Tables:

- `recipes`
  - id -- PK
  - recipe_name
  - cook_time
  - ingredient_id -- FK

- `ingredients`
  - id -- PK
  - ingredient_name
  - recipe_id -- FK

- `steps`
  - id -- PK
  - step_number
  - recipe_id -- FK