const mysql = require ('mysql');
const cors = require('cors');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet'); // middleware tier d'express pour la sécurisation
const dotenv = require('dotenv').config(); // fait appel à dotenv pour sécurisé la connexion à la BDD
const mongoSanitize = require('express-mongo-sanitize'); // middleware de prévention contre les injections opérateur
const db = require("./models");

const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const commentRoutes = require('./routes/comment');

// connexion BDD
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_MDP, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  loggin: false
});

module.exports = sequelize;
global.sequelize = sequelize;

sequelize.authenticate ((err) => {
  if (err) throw err;
  console.log ('Connecté!');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(mongoSanitize()); // Clear user data


// Appel des routers
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);

module.exports = app;