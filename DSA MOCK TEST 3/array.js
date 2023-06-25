class Stack {
  constructor() {
    this.items = []; // Array to store the stack elements
  }

  // Method to add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null; // If stack is empty, return null
    }
    return this.items.pop();
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: null


