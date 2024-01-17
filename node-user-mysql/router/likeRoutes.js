const express = require('express');
const router = express.Router();
const { like,likeCount } = require('../controller/likeController');

router.post('/:postId/like', like);
router.get('/:postId/details',likeCount);

module.exports = router;