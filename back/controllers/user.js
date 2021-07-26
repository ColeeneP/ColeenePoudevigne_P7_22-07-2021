const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// controller de création de compte
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) // hash du mdp
      .then(hash => {
        const user = new User({
          firstname: req.body.firstname,
          name: req.body.name,
          email: req.body.email,
          password: hash // On récupère le hash créé et on créé un user avec ce hash
        });
        user.save() // On enregistre le user dans la BDD
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

// controller de connexion à un compte existant
  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) // On cherche dans la BDD le user correspondant à l'email (unique)
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' }); // si aucun mail correspondant n'existe
        }
        bcrypt.compare(req.body.password, user.password) // on fait appel à bcrypt pour comparer le mdp saisi à celui dans la BDD
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' }); // si mdp incorrect
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id }, // argument à encoder, permettra de sécuriser la création, modification et suppression d'objets
                '56391random2581secret9851key', // attribution d'un token d'authentification
                { expiresIn: '2h' } // expiration du token
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

// controller d'accès à un profil
  exports.getOneUser = (req, res, next) => {
    User.findOne({
      _id: req.params.id
    }).then(
      (thing) => {res.status(200).json(thing);}
    ).catch(
      (error) => { res.status(404).json({ error: error });}
    );
  };

// controller de modification d'un profil
exports.modifyUser = (req, res, next) => {
    const sauceObject = req.file ? {
      ...JSON.parse(req.body.user),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : {...req.body };

      User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };