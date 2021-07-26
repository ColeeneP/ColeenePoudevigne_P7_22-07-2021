const Message = require('../models/messages');
const Comment = require('../models/comments');
const User = require('../models/users');
const fs = require('fs');


// Création d'un message
exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.message);
    const message = new Message({
      ...messageObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // protocole HTTP/HTTPS + racine du serveur + dossier d'image + nom du fichier
    });
      message.save().then(
        () => {
          res.status(201).json({ message: 'Message créé !' }); }
      ).catch(
        (error) => {
          res.status(400).json({ error: error });}
      );
    };

// Afficher tous les messages
exports.getAllMessages = (req, res, next) => {
    Message.find()
    .then((things) => {res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

// Modifier un message
exports.modifyMessage = (req, res, next) => {
    const messageObject = req.file ? {
      ...JSON.parse(req.body.message),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : {...req.body };

      Message.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Message modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

//Supprimer un message
exports.deleteMessage = (req, res, next) => {
    Message.findOne({ _id: req.params.id })
      .then(thing => {
        const filename = thing.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Message.deleteOne({ _id: req.params.id })
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
        Message.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { likes: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous aimez ce message !' }))
        .catch( error => res.status(400).json({ error}))

    } else { // annuler le like
        Message.findOne({_id: req.params.id})
        .then( message => {
            Message.updateOne({_id: req.params.id}, { $inc: { likes: -1}, $pull: { likes: req.body.userId}, _id: req.params.id })
                .then( () => res.status(200).json({ message: 'Vous n\'aimez plus ce message !' }))
                .catch( error => res.status(400).json({ error}))
        })
        .catch( error => res.status(400).json({ error}))  
    }           
};