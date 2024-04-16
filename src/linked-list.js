import Node from "./node.js";

const Linked_list = function () {
  let head = null;
  let size = 0;

  function append(value, next) {
    // do i need to pass next as a parameter? its null at creation ,
    // could just hard code null in the instantiations of the node
    const newNode = Node(value, next);

    if (head === null) {
      // if empty list, make the head the new node
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.next !== null) {
        // if the list consist of more than 1 node, continue to traverse the list until you reach the last node
        pointer = pointer.next;
      }

      pointer.next = newNode;
      // append node to the current last node in the list
    }

    size++;
  }

  function prepend(value) {
    console.log("prepend");
    const newNode = Node(value, head);
    // console.log("head", head);
    // console.log("newNode", newNode);
    head = newNode;
    // console.log("new head", head);
    size++;
  }

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }

    return pointer;
  }

  function at(index) {
    let pointer = head;

    for (let i = 0; i < index; i++) {
      if (pointer.next === null) {
        return null;
      }
      pointer = pointer.next;
    }
    return pointer;
  }

  function pop() {
    let pointer = head;
    let prevPointer;
    while (pointer.next !== null) {
      prevPointer = pointer;
      pointer = pointer.next;
    }

    prevPointer.next = null;
    size--;
    return pointer;
  }

  function contains(value) {
    let pointer = head;
    let index = 0;
    if (pointer.value.key === value) return true;
    while (pointer.next !== null) {
      index++;
      if (pointer.next.value.key === value) return true;
      pointer = pointer.next;
    }
    return false;
  }

  function find(value) {
    let pointer = head;
    let index = 0;
    while (pointer !== null) {
      //   console.log("pointer.value.key", pointer.value.key);
      //   console.log("listIndex", index);
      if (pointer.value.key === value) return index;
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  function toString() {
    let result = "";
    let pointer = head;

    while (pointer !== null) {
      result += `(key: ${pointer.value.key}, value: ${pointer.value.value}) -> `;
      pointer = pointer.next;
    }
    return result === "" ? "Empty List" : result + "null";
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }
    const prevNode = at(index - 1);
    if (prevNode) {
      console.log("prevNode", prevNode);
      const newNode = Node(value, prevNode.next);
      prevNode.next = newNode;
      //   console.log("prevNode.next", prevNode.next);
      //   console.log("newNode", newNode);
      size++;
    }
  }

  function removeAt(index) {
    if (index >= size || index < 0) return;
    if (index === 0) {
      head = head.next;
      size--;
      return;
    }
    let prevNode = head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
      size--;
    }
  }

  //   function stringToNumber(string) {
  //     let hashCode = 0;
  //     for (let i = 0; i < string.length; i++) {
  //       hashCode += string.charCodeAt(i);
  //     }

  //     return hashCode;
  //   }

  //   function hash(name, surname) {
  //     return stringToNumber(name) + stringToNumber(surname);
  //   }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default Linked_list;
