class Queue {
  constructor() {
    this.items = []; // Array to store the queue elements
  }

  // Method to add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // If queue is empty, return null
    }
    return this.items.shift();
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: null
