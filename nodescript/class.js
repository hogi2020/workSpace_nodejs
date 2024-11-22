class People {

    // 생성자
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

const foo = new People('foo-name');
foo.printName();    // foo-name



// 생성자
function People2(name) {
    this.name = name;
}

// People은 클래스
// prototype은 객체 선언
// printName은 함수명
// = function() {}을 통해 함수 본문 작성
People.prototype.printName = function() {
    console.log(this.name);
}

const foo2 = new People('nick_name');
console.log(foo2);
console.log("공부할 생각이 없는.....");


// 객체를 넣어서 실행하는 예
function printName2() {
    console.log(this.name);
}

const obj = {
    name : 'obj-name',
    printNames : printName2
};
obj.printNames();


function printName() {
    // 화살표 함수를 사용한다.
    setTimeout(() => {
        console.log(this.name)
    }, 1000);
}






