const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const messageCtrl = require('../controllers/message');

router.post('/createMessage', auth, multer, messageCtrl.createMessage);
router.get('/getAllMessages', auth, messageCtrl.getAllMessages);
router.get('/getOneMessage/:id', auth, messageCtrl.getOneMessage);
router.put('/modifyMessage/:id', auth, multer, messageCtrl.modifyMessage);
router.delete('/deleteMessage/:id', auth, messageCtrl.deleteMessage);
router.post('/', auth, messageCtrl.likeMessage);

module.exports = router;