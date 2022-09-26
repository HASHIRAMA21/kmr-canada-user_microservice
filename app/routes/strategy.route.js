const router = require('express').Router();
const passport = require('passport');

router.get('/login/google', passport.authenticate('google'));
router.get('/login/google', passport.authenticate('google', {scope: [ 'email' ]}));
router.get('/oauth2/redirect/google',
  passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/login/facebook', passport.authenticate('facebook'));
router.get('/login/facebook', passport.authenticate('facebook', {
    scope: [ 'email', 'user_location' ]
  }));
router.get('/oauth2/redirect/facebook',
  passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/login/twitter', passport.authenticate('twitter'));
router.get('/oauth/callback/twitter',
  passport.authenticate('twitter', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;