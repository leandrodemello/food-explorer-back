const knex = require("../database/knex");
const AppError = require("../utils/AppError");

async function ensureUserAdminVerify(request, response, next) {
  const id = request.user.id;
  // console.log(id)

  const userTag = await knex("users").select("admin").where({id}).first()
  const isUserTagAdmin = userTag.admin

  if (isUserTagAdmin !== 1) {
    throw new AppError("Acesso não autorizado!", 401)
  }

  next()
}

module.exports = ensureUserAdminVerify;