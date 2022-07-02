const words = ["abcdef", "abc", "abcd", "a", "adfasdabcdef", "asg"];
const numbers = [1, 2, 5, 6, 8, 9];

const wordsArr = words.sort((a, b) => {
  return a.length - b.length;
});

const numbersArr = numbers.sort((a, b) => a - b);

// console.log("result =>", wordsArr);
// console.log("result =>", numbersArr);

// This is a pure function
function clone(obj) {
  return { ...obj };
}

// This mutates the given object
function killParents(wizard) {
  wizard.parents = "Dead";
  return wizard;
}

// This mutates the given object
function addScar(wizard) {
  wizard.scar = true;
}

const a = { name: "Harry Potter" };
const b = clone(a);
const c = killParents(b);
const d = addScar(c);

// console.log(a); // {Name: "Harry Potter"};
// console.log(b); // {Name: "Harry Potter",parents:"Dead"};
// console.log(c); // {Name: "Harry Potter", parents: "Dead"};
// console.log(d); // {Name: "Harry Potter", scar: true, parents: "Dead"};

function bubbleSort(a, increment) {
  let swapCount = 0;
  let x = function sort() {
    increment = increment || 0;
    if (increment === a.length) {
      return { arr: a, swap: swapCount };
    }
    for (let i = 0; i < a.length - increment; i++) {
      if (a[i] > a[i + 1]) {
        swapCount++;
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
      }
    }
    return sort(a, ++increment);
  };
  return x;
}
// const inner = bubbleSort([4, 3, 1, 2]);
// const { arr, swap } = inner();
// console.log(arr, swap);

function isPrime(a) {
  let result = [];
  // let sqr = Math.ceil(Math.sqrt(num));
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
      result.push("Not prime");
    } else result.push("Prime");
  }
  return result.join("\n");
}

const inner = isPrime([91]);
console.log(inner);

let x = 0;

function abc(x) {
  x = 3;
  qty();
  console.log("abc fonksiyon icindek, deger:", x);
}
function qty() {
  x++;
  console.log("qty fonksiyonu", x);
}
abc();
console.log("x'in degeri en dısta: ", x);
