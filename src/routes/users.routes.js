const  { Router } = require("express");
const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const usersController = new UsersController();

function theMiddleware(request, response, next) {
  console.log('you hit the middleware.')

  next()
}

usersRoutes.post("/", theMiddleware, usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;