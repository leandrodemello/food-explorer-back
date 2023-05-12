const { Router, request, response } = require("express");

const MealsOrderController = require("../controllers/MealsOrderController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const ensureUserAdminVerify = require("../middleware/ensureUserAdminVerify");

const mealsOrderRoutes = Router();

const mealsOrderController = new MealsOrderController();

mealsOrderRoutes.post("/", ensureAuthenticated, mealsOrderController.create);
mealsOrderRoutes.get("/:id",  ensureAuthenticated, mealsOrderController.show);
mealsOrderRoutes.delete("/:id",  ensureAuthenticated, ensureUserAdminVerify, mealsOrderController.delete);

module.exports = mealsOrderRoutes;

