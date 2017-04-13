var Sequelize = require('sequelize'), connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
}
else {
  connection = new Sequelize('burgers_db','root','root',{
    host:"localhost",
    dialect: "mysql",
    port: "3000"
  })
};

module.exports = connection;




// {
//   "development": {
//     "username": "root",
//     "password": "root",
//     "database": "burgers_db",
//     "port": "8889",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": "root",
//     "database": "burgers_db",
//     "port": "8889",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": "root",
//     "database": "burgers_db",
//     "port": "8889",
//     "dialect": "mysql"
//   }
// }