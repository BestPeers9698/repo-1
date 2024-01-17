const express = require('express');
const router = express.Router();
const { comments } = require('../controller/commentController');

router.post('/:postId/comments', comments);

module.exports = router;