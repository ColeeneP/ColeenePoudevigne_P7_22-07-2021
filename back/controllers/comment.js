const Comment = require('../models/comments');
const Message = require('../models/messages');
const User = require('../models/users');

// Créer un commentaire
exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.comment);
    const comment = new Comment({
      ...messageObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // protocole HTTP/HTTPS + racine du serveur + dossier d'image + nom du fichier
    });
      comment.save().then(
        () => {
          res.status(201).json({ message: 'Commentaire créé !' }); }
      ).catch(
        (error) => {
          res.status(400).json({ error: error });}
      );
    };

// Afficher tous les commentaires
exports.getAllComments = (req, res, next) => {
    Comments.find()
    .then((things) => {res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

// Modifier un commentaire
exports.modifyComment = (req, res, next) => {
    const commentObject = req.file ? {
      ...JSON.parse(req.body.comment),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : {...req.body };

      Comment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Commentaire modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

// Supprimer un commentaire
exports.deleteComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id })
      .then(thing => {
        const filename = thing.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Comment.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };

// liker un commentaire
exports.likeComment = (req, res, next) => {    
    const like = req.body.like;
    if (like === 1) { // like
        Comment.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { likes: req.body.userId}, _id: req.params.id })
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