
exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id").primary();
  table.text("name").notNullable();
  table.text("email").notNullable();
  table.integer("password").notNullable();
  table.boolean("admin").defaultTo(false).notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("users");
