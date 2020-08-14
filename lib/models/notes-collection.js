'use strict';
const NotesModel = require('./notes-schema.js');

// Need to add:
// get()
// create()
// delete()
// update() - stretch goal
// Classes have methods - could be a good option here

class NotesCollection {
  create(info) {
    let note = new NotesModel(info);
    let saved = note.save();
    return saved;
  }
  get() {}
  delete() {}
}

module.exports = NotesCollection;
