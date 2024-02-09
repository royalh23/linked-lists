import Node from './node.js';

class LinkedList {
  constructor() {
    // Instanstiate the new list with a default HEAD node
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.prepend(value);
    else {
      // if HEAD is not null, traverse through the list and add the new node to
      // the end
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }
}
