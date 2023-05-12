const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MealsOrderController {
  async create(request, response) {
    const user_id   = request.user.id;
    const { cart } = request.body;

    const cartInsert = cart.map(cart => {
      return {
        user_id,
        title: cart.title,
        price: cart.price,
        image: cart.image,
        quantity: cart.quantity
      }
    })
    
    await knex("mealsOrder").insert(cartInsert)

    return response.json(cartInsert)
  };

  async show(request, response) {
    const { id } = request.params;
  
    const [mealOrder] = await knex("mealsOrder")
      .select([
        "user_id",
        "title",
        "price",
        "created_at",
      ])
      .where({id})

    return response.json(mealOrder)
  };

  async delete(request, response) {
    const { id } = request.params;
 
    await knex("mealsOrder").where({ id }).delete()

    return response.json("Pedido apagado com sucesso")
  };

};

module.exports = MealsOrderController;