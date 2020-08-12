'use strict';

// requires library files
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// instantiates an instance of Input module and initializes in constant 'options'
const input = new Input();
const notes = new Notes(input);

input.valid() ? notes.execute() : handleError();

function handleError() {
  console.log('OOPS! Something went wrong. Try again.');
  process.exit();
}

// Passes the command/options to Notes library to execute
// Notes.send(options);
