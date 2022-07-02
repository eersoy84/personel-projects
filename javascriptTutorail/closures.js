function outer() {
  var x = 0;
  x = 5;
  function inner() {
    x++;
    console.log(x);
  }
  inner();
  x = 23;
}
outer();

// const inner = outer();
// inner();
// inner();

function createAdder(x) {
  x++;
  function inner(y) {
    return x + y;
  }
  x = 0;
  return inner;
}

const add3 = createAdder(3);
const add5 = createAdder(5);
// console.log(add3(4));
// console.log(add5(0));
// for (let i = 0; i < 5; i++) {
//   console.log("uppder i", i);
//   const yy = i;
//   (function scope(i) {
//     console.log("i in function", i);
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

function createCounter() {
  let i = 0;
  function increment() {
    i++;
  }
  const message = `counter is at ${i}`;
  const deneme = () => {
    console.log("i in arrow function", i);
  };
  function getCounterValue() {
    console.log("i", i);
    console.log(message);
  }
  function getCounter() {
    console.log("counter", i);
  }
  return [increment, getCounterValue, getCounter, message, deneme];
}

const [increment, getCounterValue, getCounter, message, deneme] =
  createCounter();
increment();
increment();
increment();
increment();
increment();
deneme();
getCounterValue();
console.log("message=>", message);

getCounter();

let number = 1;
console.log(number + 2);
console.log(number);

let obj = {
  a: "Ahmet",
  b: 4,
};

function xyz(qqq) {
  qqq.a = 12;
  qqq = { a: true, b: 12, c: 23 };
}
xyz(obj);
console.log("obj", obj);
