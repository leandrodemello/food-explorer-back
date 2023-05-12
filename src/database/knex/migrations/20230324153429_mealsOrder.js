
exports.up = knex => knex.schema.createTable("mealsOrder", table => {
  table.increments("id");
  table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
  table.text("title").notNullable();
  table.integer("price").notNullable();
  table.varchar("image").default(null);
  table.integer("quantity").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("mealsOrder")

