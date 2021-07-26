const mysql = require ('mysql');
const { Sequelize } = require('sequelize');

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'utilisateur',
  password: 'mot de passe',
  database: 'groupomania'
});

connection.connect ((err) => {
  if (err) throw err;
  console.log ('Connecté!');
});

// Requête type pour accéder à la BDD
// con.query('SELECT * FROM authors', (err,rows) => {
//     if(err) throw err;