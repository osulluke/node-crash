const EventEmitter = require('events');

// Create an emiter class

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Create an event listener; everytime 'event' happens that 'listener' is called

myEmitter.on('event', () => {
    console.log('Event fired');
})

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');