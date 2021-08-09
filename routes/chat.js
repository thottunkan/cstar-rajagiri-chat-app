var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
 console.log(req.body.room)

 var data = req.body;
console.log(req.body.displayName);
 res.render('../views/chat.hbs',data);
 
});

module.exports = router;
