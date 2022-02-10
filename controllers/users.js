const User = require("../models/users");

exports.getAddUsers = (req, res, next) => {
  res.render("users/add-user-form");
};

exports.addUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.emailId;
  User.create({
    name: name,
    emailId: email,
  })
    .then(() => {
      console.log("User Added Successfully");
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.render("users/users-list", {
        prods: users,
      });
    })
    .catch((err) => console.log(err));
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      res.render("users/user-detail", {
        user: user,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.body.userId;
  // console.log(userId);
  User.findByPk(userId)
    .then((user) => {
      return user.destroy();
    })
    .then(() => {
      console.log("USER DELETED");
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};
