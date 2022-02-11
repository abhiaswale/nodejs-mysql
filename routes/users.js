const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/users");

//GET INPUT FORM
router.get("/", userControllers.getAddUsers);

//POST USER DETAILS
router.post("/add-user", userControllers.addUser); //CREATE

//GET ALL USERS IN DB
router.get("/users", userControllers.getUsers); //READ

//GET UPDATE PRODUCT
router.get("/users/edit-user/:userId", userControllers.getEditUser);

//UPDATING THE PRODUCT
router.post("/update-user", userControllers.postUpdateProduct); //UPDATE

//GET DETAILS OF PARTICULAR USER
router.get("/users/:userId", userControllers.getUser);

//DELETE USER
router.post("/delete-user", userControllers.deleteUser); //DELETE

module.exports = router;
