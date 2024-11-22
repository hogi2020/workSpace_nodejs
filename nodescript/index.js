console.log('hello node.js');

if (true) {
    let foo = 5;
}
// console.log(foo);

const int = -5;
const double = 3.4;

const okFlag = true;
const ngFlag = false;


if(ngFlag) {
    console.log(double);
}

// 속성값에는 속성명과 값을 넣을 수 있습니다
const obj = {
    key1 : 'val1',
    key2 : 'val2',
    key3 : 'val3'
}


// 속성값에는 다양한 값을 넣을 수 있습니다.
const obj2 = {
    foo : {
        bar : 'val4'
    },

    now : new Date(),

    func : function() {
        console.log('function');
    },

    func2 : (x, y) => {
        console.log(x + y);
    }
}


// 속성이름을 생략하고 값만 작성하는 표기법 등장 (ES6)
const key = 'value1';
const key2 = 'value2';

const obj3 = {
    key, key2    
}



// 속성 이름을 객체 바깥에서 정의한 값을 이용해 초기화할 수 있다.
const key3 = 'keyName';
const obj4 = {
    [key3] : 'keyNameChage'
}

// obj로 선언한 속성에는 마침표(.) 또는 대괄호([])로 접근할 수 있습니다.
console.log(obj4);
console.log(obj2.foo.bar);
console.log(obj3.key2);
console.log(obj4[key3]);


// onject는 const로 선언하더라도 안에 있는 속성값은 바꿀 수 있습니다.
// 다만 Object.freeze()로 객체를 고정해 속성을 덮어쓰는 것을 막을 수 있습니다.
const obj5 = {
    foo : 'hello'
};

console.log(obj5.foo);
obj5.foo = 'bye';
console.log(obj5.foo);


// 배열
const arr = [1, 2, 3];

console.log(arr[0]);
console.log(arr.length);


// 함수
function add(a, b) {
    return a + b;
}

const value = add(1, 2);
console.log(value);


// 함수2
function setName(obj) {
    obj.name = 'Bob';
}

const person = {name : 'Alice'};
console.log(person.name);

setName(person);
console.log(person.name);


// 함수3
const add2 = function(a, b) {
    return a + b;
}


// 콜백에 익명 함수
setTimeout(function() {
    console.log('ls')
}, 1000);


// 즉시 실행 함수, 곧바로 실행된다.
(function() {
    console.log('executed');
})();


// ES6 이후의 함수
function add3(a, b = 2) {
    return a + b;   // null + 2
}

const total = add3(1);  
console.log(total); // 1 + 2

const total2 = add3(1, 3);
console.log(total2);    // 1 + 3


// 함수4
function add4(a, b) {
    return a + b;
}

const add5 = (a, b) => {return a + b};
console.log(add5(5, 6));


const double2 = a => a * 2;
console.log(double2(3));


// 배열
const a = [1, 2, 3];
console.log(a);

// 배열의 길이를 표준 출력에 표시한다.
Array.prototype.showLength = function() {
    // this는 생성된 배열 자신을 가리킨다.
    console.log(this.length);
}
console.log(a.showLength());