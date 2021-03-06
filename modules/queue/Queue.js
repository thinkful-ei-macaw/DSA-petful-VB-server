class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if(this.first === null){
      return; 
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) {
      return;
    }

    let currNode = this.first;
    let array = [];
    while (currNode !== null) {
  
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }
}

module.exports = Queue;
