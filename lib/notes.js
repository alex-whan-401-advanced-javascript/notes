'use strict';

const NotesModel = require('./notes-schema.js');

class Notes {
  constructor() {
    // this.action = opts.command.action;
    // this.payload = opts.command.payload;
  }

  async execute(noteObj) {
    switch (noteObj.action) {
      case 'add':
        return this.add(noteObj.payload, noteObj.category);
      case 'list':
        return this.list(noteObj.category);
      case 'delete':
        return this.delete(noteObj.payload);
      default:
        return Promise.resolve();
    }
  }

  async add(text, category) {
    const newNote = new NotesModel({ category, text });
    let saved = await newNote.save();
    return saved;

    // console.log(`Adding Note: ${payload}`);
  }

  async list(category) {}

  async delete(id) {}
}

module.exports = Notes;
