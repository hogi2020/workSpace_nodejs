var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '키위의 블로그' });
});

router.get('/login', function(req, res, next) {
  // index는 views의 index.ejs를 의미합니다.
  // {} 딕셔너리와 같은 구조로, pageName 명을 찾아줘
  res.render('index', { title: '키위 맛없어', pageName: 'login.ejs' });
});

module.exports = router;
