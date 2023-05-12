const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const { diskStorage } = require("multer");

class MealsController {
  async create(request, response) {
    const { title, category, description, price, ingredients } = request.body;
    const user_id = request.user.id;

    if(!title || !category || !description || !price) {
      throw new AppError("Insira todos os dados! (nome, categoria descrição e valor)")
    }

    const getTitle = await knex("meals").select("title").where({ title })
    const titleExist = getTitle.length

    if ( titleExist > 0 ) {
      throw new AppError("Este prato já se encontra cadastrado!")
    }

    const imageFile = request.file.filename
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(imageFile)

    const [meals_id] = await knex("meals").insert({
      user_id,
      image: filename,
      title,
      category,
      description,
      price 
    })

      const ingredientsInsert = ingredients.map(name => {
      return {
        name, 
        meals_id
      }
    })
  
    await knex("ingredients").insert(ingredientsInsert)

    return response.status(201).json()
  };


  async show(request, response) {
    const { id } = request.params;
    const meal = await knex("meals").where({ id }).first()
    const ingredients = await knex("ingredients").where({ meals_id: id})  
  
    return response.json({ 
      ...meal, 
      ingredients 
    })
  };

  async index(request, response) {
    const { title, ingredients } = request.query;

    let meals

    if (ingredients) {
      const filterIngredients = ingredients.split(",").map(ingredient => ingredient.trim())
      
      meals = await knex("ingredients")
        .select([
          "meals.id",
          "meals.title",
          "meals.category",
          "meals.description",
          "meals.price"
        ])
        .whereLike("meals.title", `%${title}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("meals", "meals.id", "ingredients.meals_id")
        .orderBy("meals.title")

    } else {
      meals = await knex("meals")
        .orderBy("title")
        .whereLike("title", `%${title}%`)
    }

    const allIngredients = await knex("ingredients")
    const mealsWithIngredients = meals.map(meal => {
      const mealIngredients = allIngredients.filter(ingredient => ingredient.meals_id === meal.id)
      return {
        ...meal,
        ingredients: mealIngredients
      }
    })


    return response.json(mealsWithIngredients)
  };
  
  async update(request, response) { 
    const { title, category, description, price, ingredients } = request.body;
    const id = request.params.id;

    const meal = await knex("meals").where({id}).first()

    meal.title = title ?? meal.title;
    meal.description = description ?? meal.description;
    meal.category = category ?? meal.category;
    meal.price = price ?? meal.price;
    meal.updated_at = knex.raw('CURRENT_TIMESTAMP')

    await knex("meals").where({id}).update(meal)
    
    await knex("ingredients").where({meals_id: id}).delete()
    
    const ingredientsInsert = ingredients.map(name => {
      return {
        name, 
        meals_id: meal.id
      }
    }) 

    await knex("ingredients").insert(ingredientsInsert)
    
    return response.status(200).json()
  };


  async delete(request, response) {
    const { id } = request.params;
 
    await knex("meals").where({ id }).delete()

    return response.json("Prato apagado com sucesso")
  };

};

module.exports = MealsController;