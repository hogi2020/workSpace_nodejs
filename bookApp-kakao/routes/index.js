var express = require('express');
var router = express.Router();

/* GET home page. */
/* localhost:5000 엔터 로 요청을 하면 6번 인터셉트 해서 home.ejs요청한다.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName: 'home.ejs' });
});
/* 로그인 화면 추가 */
/* localhost:5000/login 요청하면 views폴더 아래 auth폴더 아래 login.ejs요청됨 */
/* localhost:5000엔터를 하면  localhost:5000/index.ejs */
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs' });
});
/* 도서검색 화면 추가 */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'book/bookList.ejs' });
});


/**
 * 클라우드서비스를 활용한 게시판 구현
 */
router.get('/posts', function(req, res, next) {
  res.render('index', {title:'글목록', pageName:'posts/list.ejs'})
})

router.get('/posts/write', function(req, res, next) {
  res.render('index', {title:'글쓰기', pageName:'posts/write.ejs'})
})

router.get('/posts/:id', function(req, res, next) {
  // 사용자가 선택한 값을 쿼리스트링으로 받아오는 코드 추가함
  let id = req.params.id
  res.render('index', {title:'글상세', pageName:'posts/read.ejs', id:id})
})

router.get('/posts/update/:id', function(req, res, next) {
  let id = req.params.id
  res.render('index', {title:'글수정', pageName:'posts/update.ejs', id:id})
})

/* 클라우드 서비스를 입력결과 */
module.exports = router;
