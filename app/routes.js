var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-trick', function(req,res) {
  var balls = req.session.data['juggling-balls']
  if (balls == "3 or more") {
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }
})
module.exports = router
