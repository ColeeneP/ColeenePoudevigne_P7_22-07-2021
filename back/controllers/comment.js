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
    attachment: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
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
      attributes: ['id', 'idMESSAGES', 'idUSERS', 'content', 'attachment', 'likes']})
    .then((things) => {res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

exports.getOneComment = (req, res) => {
  const id = Number(req.params.id);
  Model.Comments.findOne({
    attributes: ['id', 'content', 'attachment', 'likes'],
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
  var values = {...req.body};
  var selector = { 
  where: { id: idComment }
  };
    const commentObject = req.file ? {
      ...JSON.parse(req.body.comment),
      attachment: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : {...req.body };

      Model.Comments.update(values, selector)
      .then(() => res.status(200).json({ message: 'Commentaire modifié !'}))
      .catch(error => res.status(400).json({ message: error.message }));
  };

// Supprimer un commentaire
exports.deleteComment = (req, res) => {
  const idComment = Number(req.params.id);
  console.log(idComment);
    Model.Comments.findOne({ where: {id : idComment}})
      .then(thing => 
        {console.log(thing)
          if(thing.attachment != null) {
                    const filename = thing.attachment.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Model.Comments.destroy({ where: {id : idComment}})
            .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
            .catch(error => res.status(400).json({  message: error.message }));
        });
          } else {
            Model.Comments.destroy({ where: {id : idComment}})
            .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
            .catch(error => res.status(400).json({  message: error.message }));
          }
      })
      .catch(error => res.status(500).json({ message: error.message }));
  };

// liker un commentaire
exports.likeComment = (req, res, next) => {    
    const like = req.body.like;
    if (like === 1) { // like
        Comments.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { likes: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous aimez ce commentaire !' }))
        .catch( error => res.status(400).json({ error}));
    } else { // annuler le like
        Comment.findOne({_id: req.params.id})
        .then( comment => {
            Comment.updateOne({_id: req.params.id}, { $inc: { likes: -1}, $pull: { likes: req.body.userId}, _id: req.params.id })
                .then( () => res.status(200).json({ message: 'Vous n\'aimez plus ce commentaire!' }))
                .catch( error => res.status(400).json({ error}));
        })
        .catch( error => res.status(400).json({ error}));  
    }           
};