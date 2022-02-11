const User = require("../models/users");

exports.getAddUsers = (req, res, next) => {
  res.render("users/add-user-form", {
    editing: false,
  });
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

exports.getEditUser = (req, res, next) => {
  const edit = req.query.edit;
  console.log(edit);
  if (!edit) {
    return res.redirect("/");
  }
  const userId = req.params.userId;
  User.findAll({ where: { id: userId } })
    .then((resp) => {
      const user = resp[0];
      if (!user) {
        return res.redirect("/");
      }

      res.render("users/add-user-form", {
        editing: edit,
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUpdateProduct = (req, res, next) => {
  const updatedName = req.body.name;
  const updatedEmailId = req.body.emailId;
  const userId = req.body.userId;
  console.log(userId);
  User.findByPk(userId)
    .then((user) => {
      user.name = updatedName;
      user.emailId = updatedEmailId;
      return user.save();
    })
    .then(() => {
      res.redirect("/users");
      console.log("UPDATED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
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
