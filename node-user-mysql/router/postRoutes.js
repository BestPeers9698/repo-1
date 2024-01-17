const express = require('express');
const router = express.Router();
const { post } = require('../controller/postController');

router.post('/posts', post);

module.exports = router;