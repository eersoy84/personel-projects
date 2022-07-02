//####Comparison Sort//
//Bubble Sort -- Rarely used,
//Insertion Sort -- Small input, mostly when items are sorted works fast
//Selection Sort -- Rarely used
//Merge Sort && Divide And Conquer O(nlog(n)) same in all worst case scenerios SpaceComplexity O(n)
//Quick Sort && Divide And Conquer Worst (O(n2))

///////////
//####Non-Comparison Sort//

///////////

function bubbleSort(arr, decrement) {
  decrement = decrement || 1;

  if (decrement === arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length - decrement; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  decrement++;
  return bubbleSort(arr, decrement);
}
// console.log(bubbleSort([-10, -9, -8, -1, 0, 99, 44, 33, 22, 1]));

function selectionSort(arr, increment) {
  increment = increment || 0;
  let length = arr.length;
  if (increment === length - 1) {
    return arr;
  }
  let min = arr[increment];
  let index;
  for (let i = increment; i < length; i++) {
    let currentValue = arr[i];
    if (min > currentValue) {
      min = currentValue;
      index = i;
    }
  }
  let temp = arr[increment];
  arr[increment] = min;
  if (index) arr[index] = temp;
  increment++;
  return selectionSort(arr, increment);
}
// console.log(selectionSort([8, 9, 5, 6, 2, 1, -3]));

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);
  let temp1 = mergeSort(leftArr);
  let temp2 = mergeSort(rightArr);
  return merge(temp1, temp2);
}

function merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    let minValue;
    if (leftArr[0] < rightArr[0]) {
      minValue = leftArr.shift();
    } else {
      minValue = rightArr.shift();
    }
    result.push(minValue);
  }
  if (leftArr.length > rightArr.length) {
    result = [...result, ...leftArr];
  } else result = [...result, ...rightArr];
  return result;
}
// console.log("Merge Sort Result:", mergeSort([2, 1, 9, 3, 6]));

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
  let leftSort = quickSort(left);
  let rightSort = quickSort(right);
  return [...leftSort, pivot, ...rightSort];
}

console.log("QuickSort Result:", quickSort([8, 2, 4, 3, 1, 0]));
