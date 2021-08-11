const jwt = require('jsonwebtoken'); // permettra de faire appel à jsonwebtoken

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // On récupère le token dans le header
    const decodedToken = jwt.verify(token, '56391random2581secret9851key'); // On demande à jwt de décoder le token récupéré
    const userId = decodedToken.userId; // On vérifie que l'id du token correspond à celui du user
    console.log(userId);
    if (req.body.userId && req.body.userId !== userId) { // si le user id de la requête est différent de celui du token
      throw 'Invalid user ID'; 
    } else {
      req.user = decodedToken;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
// const jwt = require('jsonwebtoken');

// //attribut la clé secrette à la constante
// const JWT_SIGN_SECRET = '56391random2581secret9851key';
// module.exports = {
//     // fonction de generation de token
//     generateTokenForUser: function(userData) {
//         return jwt.sign({
//             userId: userData.id,
//             isAdmin: userData.isAdmin
//         },
//         JWT_SIGN_SECRET,
//         {
//             //le token expire 24h apres sa creation
//             expiresIn: '24h'
//         })
//     },
//     parseAuthorization: function(authorization){
//         //si authorization est different du null on le remplace par bearer
//         return (authorization != null) ? authorization.replace('Bearer ', '') : null;
//     },
//     //fonction de recuperation du userId
//     getUserId: function(authorization){
//         //par sécurité on defini le userId sur -1
//         let userId = -1;
//         let token = module.exports.parseAuthorization(authorization);
//         //on verifie si le token et different de null
//         if (token != null) {
//             try{
//                 //on verrifie le token avec la clé secrette
//                 const jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
//                 //si la verification est bonne on attribut la valeur a la constante userId
//                 if (jwtToken != null)
//                     userId = jwtToken.userId;
//             } catch (err){}
//         }
//         //on retourne userId
//         return userId
//     }
// }