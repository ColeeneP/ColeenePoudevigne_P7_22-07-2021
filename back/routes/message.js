const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const messageCtrl = require('../controllers/message');

router.post('/createMessage', auth, multer, messageCtrl.createMessage);
router.get('/', auth, multer, messageCtrl.getAllMessages);
router.put('/', auth, multer, messageCtrl.modifyMessage);
router.delete('/', auth, multer, messageCtrl.deleteMessage);
router.post('/', auth, messageCtrl.likeMessage);

module.exports = router;