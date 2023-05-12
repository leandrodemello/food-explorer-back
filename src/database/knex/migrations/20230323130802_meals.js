exports.up = knex => knex.schema.createTable("meals", table => {
  table.increments("id");
  table.integer("user_id").references("id").inTable("users");
  table.varchar("image").default(null);
  table.text("title").notNullable();
  table.text("category", ['Refeições', 'Sobremesas', 'Bebidas']).notNullable();
  table.integer("price").notNullable();
  table.text("description").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
}); 


exports.down = knex => knex.schema.dropTable("meals")