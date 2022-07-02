function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  for (let word of magazineArr) {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }

    magazineObj[word]++;
  }

  var notesAvaible = true;
  for (let word of noteArr) {
    if (magazineObj[word]) {
      magazineObj[word]--;

      if (magazineObj[word] <= 0) {
        notesAvaible = false;
      }
    } else {
      notesAvaible = false;
    }
  }
  return notesAvaible;
}

// console.log(
//   harmlessRansomNote("is is is", "this is is is a the first test of the")
// );

function ceaserCipher(str1, str2) {
  var x = str1.split("");
  var y = str2.split("");
  var isPalindrome = false;
  if (x.join("") === y.reverse().join("")) {
    return (isPalindrome = true);
  }
  return isPalindrome;
}
const x = ceaserCipher("kekek", "kekek");
// console.log(x);

function reverseWords(str) {
  let newArr = [];
  var strArr = str.split(" ");
  for (let words of strArr) {
    for (let i = words.length - 1; i >= 0; i--) {
      var curChar = words[i];
      newArr.push(curChar);
    }
    newArr.push(" ");
  }
  return newArr.join("");
}
const y = reverseWords("siht si a gnirts fo sdrow");
// console.log(y);

function reverseArray(arr) {
  let j = arr.length;
  for (let i = 0; i <= arr.length; i++) {
    if (i < j) {
      j--;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

// console.log(reverseArray([7, 6, 5, 4, 3, 2, 1]));

function meanMedianMode(arr) {
  const getMean = () => {
    let result = 0;
    for (let values of arr) {
      result += values;
    }
    return result / arr.length;
  };

  const getMedian = () => {};

  const getMode = () => {
    arrObj = {};
    for (let values of arr) {
      if (!arrObj[values]) arrObj[values] = 0;
      arrObj[values]++;
    }
    let result = [];
    var keyValue;
    let maxFrequency = 0;

    for (const [key, value] of Object.entries(arrObj)) {
      if (value > maxFrequency) {
        result = [parseInt(key)];
        maxFrequency = value;
      } else if (value == maxFrequency) {
        result.push(parseInt(key));
      }
    }
    return result;
  };
  return [getMean, getMedian, getMode];
}

const [getMean, getMedian, getMode] = meanMedianMode([1, 2, 3, 4, 5, 6, 6]);
const mean = getMean();
// const median = getMedian();
const mode = getMode();
// console.log("mean", mean);
// console.log("median", median);
// console.log("mode =>", mode);

function twoSum(numArr, sum) {
  let hashTable = [];
  let pairs = [];

  for (let i = 0; i < numArr.length; i++) {
    var curr = numArr[i];
    var counterPart = sum - curr;
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([curr, counterPart]);
    }
    hashTable.push(curr);
  }
  // console.log("hashTable", hashTable);
  return pairs;
}

// const result = twoSum([3, 4, 6, 1], 7);
// console.log(result);

function binarySearch(numArr, key) {
  var middle = Math.floor(numArr.length / 2);
  var middleVal = numArr[middle];
  if (middleVal === key) {
    return true;
  } else if (middleVal > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, middle), key);
  } else if (middleVal < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middle, numArr.length), key);
  } else return false;
}

const result = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 16);
// console.log(result);

// var result = 0;
// function factorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// const num = 4;
// const output = factorial(num);
// console.log(output);
// console.log(output);
let sum = 0;
function fibonacci(position) {
  if (position < 3) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

// console.log(fibonacci(9)); //3 -- 1,1,2,3

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

function bubbleSort(arr, increment) {
  increment = increment || 0;
  if (arr.length === increment) {
    return arr;
  } else {
    for (let i = 0; i < arr.length - increment; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    return bubbleSort(arr, ++increment);
  }
}
// console.log(bubbleSort([3, -9, -12, -1, 8]));

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var left = [];
  var right = [];
  var middleIndex = Math.floor(arr.length / 2);
  let pivot = arr[middleIndex];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 8, 5, 1, 4, 6, 9])); //1,2,3,4,5,6,7

//5
//3,2,7
//2
//2,3,7

//1
//1,4,6

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  const tempArr1 = mergeSort(firstHalf);
  const tempArr2 = mergeSort(secondHalf);
  return merge(mergeSort(tempArr1), mergeSort(tempArr2));
}

function merge(arr1, arr2) {
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    var minElem;
    if (arr1[0] < arr2[0]) {
      minElem = arr1.shift();
    } else minElem = arr2.shift();
    result.push(minElem);
  }
  if (arr1.length > arr2.length) result = [...result, ...arr1];
  else result = [...result, ...arr2];
  return result;
}

// console.log(merge([12, 4], [2, 6]));
// console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
