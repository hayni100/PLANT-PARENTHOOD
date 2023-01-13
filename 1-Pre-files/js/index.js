const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "plantParent_db",
  },
  console.log(`Connected to the plantParent_db database.`)
);
