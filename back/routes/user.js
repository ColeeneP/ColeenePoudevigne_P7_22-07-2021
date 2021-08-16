const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const rateLimit = require('express-rate-limit'); // middleware contre les attaques de force brute

const accountLimiter = rateLimit ({
    windowMs: 60*60*1000, // 1h par fenêtre
    max: 5, // blocage après 5 tentatives
    message:
        "Trop de requêtes envoyées depuis cette IP"
});

router.post('/signup', userCtrl.signup);
router.post('/login', accountLimiter, userCtrl.login);
router.get('/getOneUser/:id', auth, userCtrl.getOneUser);
router.get('/getUser', auth, userCtrl.getUser);
// router.put('/modifyUser',  userCtrl.modifyUser);
router.delete('/deleteUser/:id', auth, userCtrl.deleteUser);

module.exports = router;