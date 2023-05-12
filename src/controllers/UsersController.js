const UserRepository = require("../repositories/UserRepository");
const UserCreateServices = require("../services/UserCreateServices");
const UserUpdateServices = require("../services/UserUpdateServices");

class UsersController {
  async create (request, response ) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const userCreateServices =new UserCreateServices(userRepository);
    await userCreateServices.execute({ name, email, password });

    response.status(201).json();
  };

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;  

    const userRepository = new UserRepository();
    const userUpdateServices =new UserUpdateServices(userRepository);
    await userUpdateServices.execute({ name, email, password, old_password });

    return response.status(200).json();
  };

};

module.exports = UsersController;