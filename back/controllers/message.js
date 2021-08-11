const Model = require('../models/');
const fs = require('fs');
const decodedToken = require("../middleware/auth.js");


// Création d'un message
exports.createMessage = (req, res) => {
    const userId = Number(req.user.userId);
    const message = ({
      idUSERS: userId,
      content: req.body.content,
      attachment: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
    });
    console.log(message);
      Model.Messages.create({
        idUSERS: userId,
        content: req.body.content,
        attachment: message.attachment
      }).then(
        () => {
          res.status(201).json({ message: 'Message créé !' }); }
      ).catch(
        (error) => {
          res.status(400).json({ error: error });}
      );
    };

// Afficher tous les messages
exports.getAllMessages = (req, res) => {
    Model.Messages.findAll({
      attributes: ['content', 'attachment', 'likes']})
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

// Modifier un message
exports.modifyMessage = (req, res, next) => {
    const messageObject = req.file ? {
      ...JSON.parse(req.body.message),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : {...req.body };

      Model.Message.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Message modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

//Supprimer un message
exports.deleteMessage = (req, res, next) => {
    Model.Message.findOne({ _id: req.params.id })
      .then(thing => {
        const filename = thing.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Model.Message.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Message supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };

// like d'un message
exports.likeMessage = (req, res, next) => {    
    const like = req.body.like;
    
    if (like === 1) { // like
        Model.Message.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { likes: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous aimez ce message !' }))
        .catch( error => res.status(400).json({ error}))

    } else { // annuler le like
        Model.Message.findOne({_id: req.params.id})
        .then( message => {
            Model.Message.updateOne({_id: req.params.id}, { $inc: { likes: -1}, $pull: { likes: req.body.userId}, _id: req.params.id })
                .then( () => res.status(200).json({ message: 'Vous n\'aimez plus ce message !' }))
                .catch( error => res.status(400).json({ error}))
        })
        .catch( error => res.status(400).json({ error}))  
    }           
};