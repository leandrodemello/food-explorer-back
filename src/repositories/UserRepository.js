const { request } = require("express");
const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite");

class UserRepository {
  async findByEmail({ email }) {
    const userEmail = await knex("users").where({ email }).first()
    
    return userEmail
  };

  async findUser({ user }) {
    const user_id = await knex("users").where({ email }).select("id").first()
    const userId = await knex("users").where({id: user_id.id}).first()

    return userId
  };

  async create({ name, email, admin, password }) {
    const userInsert = await knex('users').insert({
      name,
      email,
      admin,
      password
    })
    return { userInsert }
  };

  async update( name, email, password ) {
    const updated_at = knex.raw('CURRENT_TIMESTAMP')

    await knex("users").where({ email } ).update({
      name,
      email,
      updated_at,
      password
    })
    return 
  };

};

module.exports = UserRepository;