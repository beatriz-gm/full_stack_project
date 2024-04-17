const  { Router } = require("express");
const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");
const tagsController = new TagsController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;