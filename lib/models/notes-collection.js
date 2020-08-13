'use strict';
const NotesModel = require('./notes-schema.js');

// Need to add:
// get()
// create()
// delete()
// update() - stretch goal
// Classes have methods - could be a good option here

class NotesCollection {
  async create(info) {
    let note = new NotesModel(info);
    let saved = await note.save();
    return saved;
  }
  get() {}
  delete() {}
}

module.exports = NotesCollection;
