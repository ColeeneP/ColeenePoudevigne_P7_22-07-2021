const cors = require('cors');
const Sequelize = require('sequelize');
const path = require('path');
const helmet = require('helmet'); // middleware tier d'express pour la sécurisation
const db = require("./models");
const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const commentRoutes = require('./routes/comment');
const bodyParser = require('body-parser');

// création tables

db.sequelize.sync();
// db.sequelize.sync({force: true})

// connexion à la BDD

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
app.use(bodyParser());

// Appel des routers
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;