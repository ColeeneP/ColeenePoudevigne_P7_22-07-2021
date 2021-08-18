const Model = require('../models/');
const fs = require('fs');
const decodedToken = require("../middleware/auth.js");

// Créer un commentaire
exports.createComment = (req, res) => {
  const userId = Number(req.user.userId);
  const message = ({
    idMESSAGES: req.body.idMessage,
    idUSERS: userId,
    content: req.body.content,
  });
  console.log(message);
    Model.Comments.create(message).then(
      () => {
        res.status(201).json({ message: 'Commentaire créé !' }); }
    ).catch(
      (error) => {
        res.status(400).json({ error: error });}
    );
  };

// Afficher tous les commentaires
exports.getAllComments = (req, res, next) => {
    Model.Comments.findAll({
      attributes: ['id', 'idMESSAGES', 'idUSERS', 'content'],
      include: [{
        model: Model.Users,
        attributes: ['id', 'name', 'firstname', 'imgprofile'],
        as: 'users_comments'
      }]})
    .then((things) => {res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

exports.getOneComment = (req, res) => {
  const id = Number(req.params.id);
  Model.Comments.findOne({
    attributes: ['id', 'content'],
    where: {id: id}})
  .then((things) => {
    console.log(things);
    res.status(200).json(things);
  })
  .catch((error) => {res.status(400).json({error: error});
  });
};

// Modifier un commentaire
exports.modifyComment = (req, res, next) => {
  const idComment = Number(req.params.id);  
  const message = ({
    id: idComment,
    content: req.body.content,
  })
      Model.Comments.update(message, {where: {id: idComment}})
      .then(() => res.status(200).json({ message: 'Commentaire modifié !'}))
      .catch(error => res.status(400).json({ message: error.message }));
  };

// Supprimer un commentaire
exports.deleteComment = (req, res) => {
  const idComment = Number(req.params.id);
  const userId = Number(req.user.userId);
      Model.Comments.findOne({ where: {id : idComment}})
      .then(thing => {
      Model.Users.findOne({ where: {id: userId}})
        .then(userFound => {
          if (userFound.isAdmin == 1 || userFound.id == thing.idUSERS) {
                Model.Comments.destroy({ where: {id : idComment}})
                .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
                .catch(error => res.status(400).json({  message: error.message }));
          } else {
            return res.status(403).json({ message: 'Autorisation refusée' });
          }
        })
        .catch(error => res.status(500).json({ message: error.message }))
  })}