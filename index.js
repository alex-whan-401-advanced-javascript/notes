#!/usr/bin/env/node
'use strict';

const mongoose = require('mongoose');

// Move this out to a config file as a stretch goal
// like a .env
mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// requires library files
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const NotesCollection = require('./lib/models/notes-collection.js');

// instantiates an instance of Input module and initializes in constant 'options'
const input = new Input();
const notes = new NotesCollection();

if (input.valid()) {
  notes
    .execute(input.command) // check this
    .then(mongoose.disconnect)
    .catch((err) => console.error(err));
} else {
  handleError();
}

function handleError() {
  console.log('OOPS! Something went wrong. Try again.');
  process.exit();
}
