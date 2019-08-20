class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      return true;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
    return true;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      return true;
    }
    node.next = this.head;
    this.head = node;
    return true;
  }

  insert(pos, val) {
    let p = 0;
    let n = this.head;
    while (p !== pos) {
      if (n.next === null) {
        console.error("List shorter than expected.");
        return false;
      }
      n = n.next;
    }
    let node = new Node('val');
    node.next = n.next;
    n.next = node;
    return true;
  }

  delete(pos) {
    let p = 1;
    let n = this.head;
    while (p < pos) {
      if (n.next === null) {
        console.error("List shorter than expected.");
        return false;
      }
      n = n.next;
    }
    n.next = n.next.next;
    return true;
  }

  lookup(pos) {
    let p = 1;
    let n = this.head;
    while (p !== pos) {
      if (n.next === null) {
        console.error("List shorter than expected.");
        return false;
      }
      n = n.next;
    }
    return n.value;
  }

  ddump() {
    let n = this.head;
    while (n !== null) {
      console.log(n.value);
      n = n.next;
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(4);
list.append(6);
list.append(18);
list.append(2);
list.append(89);
list.append(7);
list.ddump();