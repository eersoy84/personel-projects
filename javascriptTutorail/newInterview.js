const first = [
  { id: 1, name: "eyup" },
  { id: 2, name: "kamil" },
  null,
  { id: 3, name: "mahmut" },
  { id: 4, name: "huseyin" },
  { id: 5, name: "mikail" },
  null,
  undefined,
];
const last = first.filter((item) => {
  if (!item) return;
  return item;
});
console.log("first==>", first);
console.log("last==>", last);
const arr1 = [];
first.map((item) => {
  if (!item) return;
  return arr1.push(item);
});

console.log("arr1=>", arr1);
