const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const { Sequelize, DataTypes } = require("sequelize");

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send([{ name: "vins" }, { name: "marie" }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const adminJs = new AdminJS({
  databases: [],
  rootPath: "/admin",
});

const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);
app.listen(8080, () =>
  console.log("AdminJS is running under localhost:8080/admin")
);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "member"], required: true },
  },
  { timestamps: false }
);

module.exports = Users;