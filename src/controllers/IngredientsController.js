const { json } = require("express");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class IngredientsController {
  async index(request, response) {
    const  { name }  = request.query; 

    const ingredients = await knex("ingredients")
      .whereLike("name", `%${name}%`)

    return response.json(ingredients)

  };

};

module.exports = IngredientsController;