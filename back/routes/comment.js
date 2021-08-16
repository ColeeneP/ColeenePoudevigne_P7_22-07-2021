const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const commentCtrl = require('../controllers/comment');

router.post('/createComment', auth, multer, commentCtrl.createComment);
router.get('/getAllComments', auth, commentCtrl.getAllComments);
router.get('/getOneComment/:id', auth, commentCtrl.getOneComment);
router.put('/modifyComment/:id', auth, multer, commentCtrl.modifyComment);
router.delete('/deleteComment/:id', auth, commentCtrl.deleteComment);

module.exports = router;