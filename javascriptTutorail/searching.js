function memoizedAdd() {
  let memo = {};
  let q = 3;
  let setMemo = function (n) {
    q += 6;
    if (n in memo) {
      // console.log("returing from cache...");
      return memo[n];
    }
    memo[n] = n + 1;
    console.log("not in cache...", memo);
    return memo[n];
  };

  function getMemo(n) {
    console.log("returning memo ...", memo[n]);
    return memo[n];
  }
  return { setMemo, getMemo };
}

// const memoize = memoizedAdd();
// console.log(memoize.setMemo(5));
// console.log(memoize.setMemo(6));
// console.log(memoize.setMemo(5));
// console.log(memoize.getMemo(6));

//0,1,1,2,3,5,8,13,21,34,
let calculations = 0;
function fibMemo() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      // console.log("returing from cache...");
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// const fasterFib = fibMemo();
// console.log(fasterFib(1000));
// console.log("calculations = >", calculations);

class Stack {
  constructor() {
    this.array = [];
    this.length = this.array.length;
  }
  push(value) {
    if (this.length === 5) {
      alert("Stack was alread full");
      return;
    }
    this.array.push(value);
    this.length++;
    return this.array;
  }
  pop() {
    if (this.length === 0) {
      alert();
      return "Stack is Empty";
    }
    this.array.pop();
    this.length--;
    return this.array;
  }
  empty() {
    if (this.array.length === 0) {
      return "Yes, Stack is empty";
    }
    return "No, Stack is not empty";
  }
  peek() {
    if (this.array.length === 0) {
      alert();
    }
    alert("Top Value is:", this.array[this.length - 1]);
  }
  swap() {
    let top = this.array[this.length - 1]; //[5]
    this.array[this.length - 1] = this.array[this.length - 2];
    this.array.length[this.length - 2] = top;
    return this.array;
  }
}

const myStack = new Stack();

function getInput() {
  const val = document.getElementById("input").value;
  return val;
}

const pushButton = document.getElementById("pushButton");
pushButton.addEventListener("click", () => {
  let inputVal = getInput();
  const array = myStack.push(inputVal);
  var rows = document.getElementsByTagName("table")[0].rows;
  for (let i = 0; i < array.length; i++) {
    rows[i].innerHTML = array[i];
  }
});

const popButton = document.getElementById("popButton");
popButton.addEventListener("click", () => {
  const array = myStack.pop();
  var rows = document.getElementsByTagName("table")[0].rows;
  for (let i = 0; i < array.length; i++) {
    rows[i].innerHTML = null;
  }
});

const emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", () => {
  myStack.empty();
});

const peekButton = document.getElementById("peekButton");
peekButton.addEventListener("click", () => {
  myStack.peek();
});

const swapButton = document.getElementById("swapButton");
swapButton.addEventListener("click", () => {
  myStack.swap();
});
