var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME', pageName:'home.ejs'});
});

// 로그인 화면 추가
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName:'auth/login.ejs'});
});

// 도서검색 화면 추가
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'book/bookList.ejs'});
});

module.exports = router;