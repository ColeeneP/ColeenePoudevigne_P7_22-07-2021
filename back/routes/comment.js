const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const commentCtrl = require('../controllers/comment');

router.post('/', auth, multer, commentCtrl.createComment);
router.get('/', auth, multer, commentCtrl.getAllComments);
router.put('/', auth, multer, commentCtrl.modifyComment);
router.delete('/', auth, multer, commentCtrl.deleteComment);
router.post('/', auth, commentCtrl.likeComment);

module.exports = router;