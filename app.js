const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/users");
const errorController = require("./controllers/error");

app.use(userRoutes);
app.use(errorController.geterrorPage);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
