const mysql = require ('mysql');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet'); // middleware tier d'express pour la sécurisation
const dotenv = require('dotenv').config(); // fait appel à dotenv pour sécurisé la connexion à la BDD
const mongoSanitize = require('express-mongo-sanitize'); // middleware de prévention contre les injections opérateur

const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const commentRoutes = require('./routes/comment');

// connexion BDD
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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(helmet());
app.use(bodyParser.json());
app.use(mongoSanitize()); // Clear user data


// Appel des routers
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);

module.exports = app;