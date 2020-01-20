var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.send("API is working properly");
})

router.get('/p0', function(request, response, next) {
    let number = (Math.random() * (1024 - 0.260) + 0.260).toFixed(4)

    response.send(number);
})

router.get('/p1', function(req, res, next) {
    let number = (Math.random() * (1024 - 0.260) + 0.260).toFixed(4)

    res.send(number);
  });

module.exports = router;