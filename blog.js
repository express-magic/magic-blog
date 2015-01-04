'use strict';
var express = require('express')
  , fs      = require('fs')
  , path    = require('path')
  , router  = express.Router()
  , path    = require('path')
  , log     = require('magic-log')
;

function compileBlogPosts() {
  
}

router.get('/blog', function (req, res, next) {
  log('blog route called');
  res.send('blogpostlist');
});

router.get('/blog/:year', function (req, res, next) {
  log('yearly collection called');
  res.send('year of blog posts');
});

router.get('/blog/:year/:month/:title', function (req, res, next) {
  var S          = req.app
    , viewDir    = S.get('dirs').views
    , title      = req.params.title
    , year       = req.params.year
    , month      = req.params.month
    , blogPath   = path.join(viewDir, 'blog', year, month, day, title) 
    , layoutPath = path.join(viewDir, 'post')
  ;

  res.render(blogPath, {}, function (err, post) {
    if ( err ) { log.error('error in magic-blog', err); return next();}
    res.render(layoutPath, {test: 'testing', post: post}, function (err, content) {
      if ( err ) { log.error('error in magic-blog', err); return next();}
      res.send(content);
    });
  });
} );

module.exports = router;
