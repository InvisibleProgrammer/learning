var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('GET user request'); // it just sends the response as a string
});

router.get('/:userId/books/:bookId', function(req, res, next) {
  var userId = req.params.userId
  var bookId = req.params.bookId

  // now, we send the response with the templating engine
  res.render('users', { userId: userId, bookId: bookId})
});

router.post('/', (req, res) => {
  res.send('POST user request')
})

router.delete('/', (req, res) => {
  res.send('DELETE user request')
})

module.exports = router;
