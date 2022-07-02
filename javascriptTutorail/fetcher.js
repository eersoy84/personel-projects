function connectedCells(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let maxRegion = 0;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      maxRegion = Math.max(maxRegion, getBiggestRegion(matrix, i, j));
    }
  }
  return maxRegion;
}
function getBiggestRegion(matrix, i, j) {
  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return 0;
  if (matrix[i][j] == 0) return 0;
  let count = matrix[i][j]--;
  count += getBiggestRegion(matrix, i + 1, j);
  count += getBiggestRegion(matrix, i - 1, j);
  count += getBiggestRegion(matrix, i, j + 1);
  count += getBiggestRegion(matrix, i, j - 1);
  count += getBiggestRegion(matrix, i + 1, j + 1);
  count += getBiggestRegion(matrix, i - 1, j - 1);
  count += getBiggestRegion(matrix, i - 1, j + 1);
  count += getBiggestRegion(matrix, i + 1, j - 1);
  return count;
}

function binarySearch(a, key) {
  let midIndex = Math.floor(a.length / 2);
  if (a[midIndex] === key) {
    return true;
  } else if (key > a[midIndex] && a.length > 1) {
    let right = a.splice(midIndex);
    return binarySearch(right, key);
  } else if (key < a[midIndex] && a.length > 1) {
    let left = a.splice(0, midIndex);
    return binarySearch(left, key);
  } else return false;
}
// console.log(binarySearch([1, 3, 5, 8, 9, 10, 13, 23], 23));

function getDiamond(num, matrix) {
  let obj = {};

  const columns = matrix[0][1];
  for (let i = 0; i < num; i++) {
    let rows = matrix[i];
    let depNum = rows[0];
    let key = rows[1];
    let newArr = rows.slice(2);

    obj[key] = newArr;
  }
  const [firstArr] = Object.values(obj);
  const keys = Object.keys(obj);
  console.log("keys", keys);
  console.log(firstArr);

  for (let i = 0; i < keys.length; i++) {
    let newest = [];
    for (let item of firstArr) {
      if (keys[i] == item) {
        newest = obj[keys[i]];
        console.log("newest", newest);
      }
    }
    console.log("keys i", keys[i]);
    console.log("D", newest[0]);
    if (keys[i] === newest[0]) {
      console.log("sdfsdf");
    }
  }
  console.log(obj);
  // for (let i = 0; i < x.length; i++) {
  //   if(x[i] = )
  // }
}

//2 A B C
//1 B D
//1 C D
//0 D
console.log(
  getDiamond(4, [
    [2, "A", "B", "C"],
    [1, "B", "D"],
    [1, "C", "D"],
    [0, "D"],
  ])
);

let hA = {};
let hB = {};
let x = a[0];
let y = a[1];

for (let item in x) {
  if (!hA[item]) hA[item];
  hA[item]++;
}
for (let item in y) {
  if (!hB[item]) hB[item];
  hB[item]++;
}

// for(let i = 0; i<a.length;i++){
//     if(!hTableA[a[i]]) hTableA[a[]]
// }
