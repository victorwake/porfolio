const { Router } = require('express');
const postMessage = require('../routes/messageRoutes.js');


const router = Router();

router.post('/message', postMessage);


module.exports = router;
