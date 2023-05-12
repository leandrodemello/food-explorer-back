const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");

class UserUpdateServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password, old_password , admin }) {

    const user = await this.userRepository.findByEmail({ email })

    if(!user ) {
      throw new AppError("Este e-mail não tem cadastro!")
    }

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para redefinição da nova senha.")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.")
      }
      
      user.password = await hash(password, 10)
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.admin = admin ?? user.admin;

    const userUpdated =  await this.userRepository.update(user.name, user.email, user.password);

    return userUpdated;
  }
}

module.exports = UserUpdateServices;