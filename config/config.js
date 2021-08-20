require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "foo_sequelize_database_development",
    host: DB_HOST,
    port: 5431,
    dialect: "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "foo_sequelize_database_test",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "foo_sequelize_database_production",
    host: DB_HOST,
    dialect: "postgres"
  }
};