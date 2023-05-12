const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const UserRepository = require("../repositories/UserRepository");
const UserCreateServices = require("./UserCreateServices");
const AppError = require("../utils/AppError");
const { default: knex } = require("knex");

describe("UserCreateServices", () => {
  let userRepositoryInMemory = null;
  let userCreateServices = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateServices = new UserCreateServices(userRepositoryInMemory);

  })

  it("user should be create", async () => {
    const user = {
      name: "User Test",
      email:"user@test.com",
      admin: 0,
      password: "123"
    };
  
    const userCreated = await userCreateServices.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const userTest1 = {
      name: "User Test 1",
      email: "usertest@test.com",
      password: "111",
      admin: 0
    }

    const userTest2 = {
      name: "User Test 2",
      email: "usertest@test.com",
      password: "222",
      admin: 0
    }

    await userCreateServices.execute(userTest1);
    await expect(userCreateServices.execute(userTest2)).rejects.toEqual(new AppError("E-mail já existe cadastro!"));
  })

});
