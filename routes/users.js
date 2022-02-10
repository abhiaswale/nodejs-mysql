const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/users");

//GET INPUT FORM
router.get("/", userControllers.getAddUsers);

//POST USER DETAILS
router.post("/add-user", userControllers.addUser); //CREATE

//GET ALL USERS IN DB
router.get("/users", userControllers.getUsers); //READ

//GET DETAILS OF PARTICULAR USER
router.get("/users/:userId", userControllers.getUser);

//DELETE USER
router.post("/delete-user", userControllers.deleteUser); //DELETE

module.exports = router;
