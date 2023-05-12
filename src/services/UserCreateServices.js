const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");

class UserCreateServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {

    let admin = 0 

    if(!name) {
      throw new AppError("O nome é obrigatório!");
    }

    const user = await this.userRepository.findByEmail({ email }); 
  
    if (user) {
      throw new AppError("E-mail já existe cadastro!")
    };

    if (password < 6) {
      throw new AppError("A senha deverá conter no mínimo 6 caracteres.")
    }

    const hashedPassword = await hash(password, 10);

    const userCreated = await this.userRepository.create({ name, email, admin, password: hashedPassword });

    return userCreated;
  }
}

module.exports = UserCreateServices;