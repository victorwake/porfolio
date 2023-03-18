const { Router } = require('express');
const router = Router();
const { postMessage  } = require('../controllers/messageControllers.js');

router.post('/message', postMessage);

module.exports = router;