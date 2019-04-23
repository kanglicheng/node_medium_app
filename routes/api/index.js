var router = require('express').Router();
router.use('/', require('./users'));

router.post('/users', function(req, res, next)){
  var user= new User();
user.username = req.body.user.username;
user.email = req.body.user.email;
user.setPassword(req.body.user.password);

user.save().then(function(){
  return res.json({user: user.toAuthJSON()});
}).catch(next);
});

module.exports = router;
