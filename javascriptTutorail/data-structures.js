class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const prev = this.traverseToIndex(index - 1);
    const pointer = prev.next;
    const newNode = new Node(value);
    newNode.next = pointer;
    prev.next = newNode;
    this.length++;
  }

  remove(index) {
    let prev = this.traverseToIndex(index - 1);
    if (prev.next === null) {
      console.log("No more items in the list");
      return;
    }
    const currentNode = prev.next;
    prev.next = currentNode.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
// 10-->5-->16-->9
// head:10=>next:5
//1-->10-->5
// head:1=>next:10

// let x = {
//     head:{
//         value:5,
//         next:{
//             value:9,
//             next:{
//                 value:10,
//                 next:{
//                     value:16,
//                     next:null
//                 }
//             }
//         }
//     },
//     tail:{
//         value:16,
//         next:null
//     }
// }

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(1, 88);
console.log("listPrev", myLinkedList.printList());
myLinkedList.remove(2);
console.log("listPrev", myLinkedList.printList());
