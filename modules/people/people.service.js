const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));
// --------------------

module.exports = {
  get() {
    //traverse through queue with linkedList
    //return as array to send back as json
    return people.all();
  },

  enqueue(person) {
    people.enqueue(person);
  },

  dequeue() {
    // Remove a person from the queue.
    people.dequeue();
  },
};
