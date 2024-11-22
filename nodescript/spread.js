const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];

// ... 전개 구문은 0개이상의 인수와 배열 객체 등을 전개하는 구문 입니다.
console.log(c);
console.log([...a, b])


// Object도 전개 구문을 사용해 새로운 객체를 작성할 수 있습니다.
const obj1 = {
    a : 'aaa',
    b : 'bbb'
}

const obj2 = {
    c : 'ccc'
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)


// 배열이나, 객체를 합성하는 것뿐이라면 Array.push를 이용하거나 속성을 추가하는 등의 방법 시도
const a1 = [1, 2, 3];
a1.push(4, 5, 6);

const c1 = a1;
console.log(c1)


const args = [1, 2, 3];

function add(x, y, z) {
    return x + y+ z;
}

const total = add(...args);
console.log(total);