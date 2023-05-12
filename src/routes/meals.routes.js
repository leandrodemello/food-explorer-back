const { Router } = require("express");
const multer = require("multer");
const uploadsConfig = require("../configs/upload");

const MealsController = require("../controllers/MealsController");
const ImageController = require("../controllers/ImageController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const ensureUserAdminVerify = require("../middleware/ensureUserAdminVerify");

const mealsRoutes = Router();
const upload = multer(uploadsConfig.MULTER);

const mealsController = new MealsController();
const imageController = new ImageController();

mealsRoutes.post("/",  ensureAuthenticated, ensureUserAdminVerify, upload.single("image"), mealsController.create);
mealsRoutes.put("/:id",  ensureAuthenticated, ensureUserAdminVerify, upload.single("image"), mealsController.update);
mealsRoutes.get("/:id", mealsController.show);
mealsRoutes.get("/", mealsController.index);
mealsRoutes.delete("/:id", ensureAuthenticated, ensureUserAdminVerify, mealsController.delete)
mealsRoutes.patch("/:id", ensureAuthenticated, ensureUserAdminVerify, upload.single("image"), imageController.update); 

module.exports = mealsRoutes; 