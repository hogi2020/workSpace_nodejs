const arr = ['foo', 'bar', 'baz'];

arr.forEach((element) => {
    console.log(element);
})


// exports
// CommonJS 모듈에서는 export라고 하는 파일 단위로 자동 생성되는 변수에
// 함수나 변수를 할당해서 외부에 공개할 수 있습니다.

exports.num = 1;

exports.add = (a, b) => {
    return a + b;
}

exports.sub = (a, b) => {
    return a - b;
}


