class Queue {
  constructor(size) {
    this.size = size;
    this.items = [];
  }
  isFull() {
    return this.items.length === this.size;
  }
  isEmpty() {
    return this.items.length == 0;
  }
  enqueue(item) {
    if (this.isFull()) return false;
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.item.shift();
  }
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  rear() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  printQueue() {
    let str = "";
    this.items.forEach(e => {
      str += e + " ";
    });
    console.log(str);
  }
  clear() {
    this.items.length = 0;
  }
}

const queue = new Queue();
module.exports = queue;
