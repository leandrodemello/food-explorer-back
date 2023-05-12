const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class ImageController {
  async update(request, response) {
    const id = request.params.id;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage;

    const meal = await knex("meals").where({ id }).first()

    if(!meal) {
      throw new AppError("Prato não localizado ou inexistente", 401)
    }

    if (meal.image) {
      await diskStorage.deleteFile(meal.image)
    }

    const filename = await diskStorage.saveFile(imageFilename);

    meal.image = filename;

    await knex("meals").update(meal).where({id});
    
    return response.status(200).json()
  };
};

module.exports = ImageController;
