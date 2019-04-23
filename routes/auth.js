var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorizaiton.split(' ')[0] === 'Token'){
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

var auth = {
  required:jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
    }),
  optional: jswt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
    })
};

module.exports = auth;
