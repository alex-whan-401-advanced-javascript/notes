'use strict';

const NotesModel = require('./models/notes-schema.js');

class Notes {
  // constructor(opts) {
  //   this.action = opts.command.action;
  //   this.payload = opts.command.payload;
  // }

  async execute(noteObj) {
    switch (noteObj.action) {
      case 'add':
        return this.add(noteObj.payload, noteObj.category);
      case 'list':
        return this.list(noteObj.payload);
      case 'delete':
        return this.delete(noteObj.payload);
      default:
        return Promise.resolve();
    }
  }

  async add(text, category) {
    console.log(`Adding NOTE: ${text}`);
    const newNote = new NotesModel({ category, text });
    let saved = await newNote.save();
    return saved;
  }

  async delete(id) {}

  async list(category) {}
}

module.exports = Notes;
