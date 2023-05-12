const { Router } = require("express");

const userRouter = require("./user.routes");
const mealsRouter = require("./meals.routes");
const mealsOrderRouter = require("./mealsOrder.routes");
const ingredientsRouter = require("./ingredients.routes");

const sessionsRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);

routes.use("/meals", mealsRouter);
routes.use("/mealsOrder", mealsOrderRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes
