const Model = require('../models/');
const fs = require('fs');
const decodedToken = require("../middleware/auth.js");


// Création d'un message
exports.createMessage = (req, res) => {
  console.log('ici' + req.file)
    const userId = Number(req.user.userId);
    const message = ({
      idUSERS: userId,
      content: req.body.content,
    })
    if (req.file) {
      message.attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
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
      order: [["createdAt", "DESC"]],
      attributes: ['id', 'idUSERS', 'content', 'attachment'],
      include: [{
        model: Model.Users,
        attributes: ['id', 'name', 'firstname', 'imgprofile'],
        as: 'users_messages'
      }]})
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

  exports.getOneMessage = (req, res) => {
    const id = Number(req.params.id);
    Model.Messages.findOne({
      attributes: ['id', 'content', 'attachment'],
      where: {id: id}})
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

// Modifier un message
exports.modifyMessage = (req, res) => {
  const idPost = Number(req.params.id);  
  const message = ({
    idMESSAGES: idPost,
    content: req.body.content,
  })
  if (req.file) {
    message.attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }
      Model.Messages.update(message, {where: {id: idPost}})
      .then(() => res.status(200).json({ message: 'Message modifié !'}))
      .catch(error => res.status(400).json({ message: error.message }));
  };

//Supprimer un message
exports.deleteMessage = (req, res) => {
  const idMessage = Number(req.params.id);
  console.log(idMessage);
    Model.Messages.findOne({ where: {id : idMessage}})
      .then(thing => 
        {console.log(thing)
          if(thing.attachment != null) {
                    const filename = thing.attachment.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Model.Messages.destroy({ where: {id : idMessage}})
            .then(() => res.status(200).json({ message: 'Message supprimé !'}))
            .catch(error => res.status(400).json({  message: error.message }));
        });
          } else {
            Model.Messages.destroy({ where: {id : idMessage}})
            .then(() => res.status(200).json({ message: 'Message supprimé !'}))
            .catch(error => res.status(400).json({  message: error.message }));
          }
      })
      .catch(error => res.status(500).json({ message: error.message }));
  };
