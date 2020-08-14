'use strict';

const NotesModel = require('./models/notes-schema.js');
const NotesCollection = require('./models/notes-collection.js');

class Notes {
  constructor() {
    this.collection = new NotesCollection();
  }

  execute(noteObj) {
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

  // We want to do what we just did for add() to all of them.
  // As it relates to Notes Collection - it's a matter of doing what we commented out, in the style of "nc". Let's make a Class to make it easier.
  // Remove NC and do it on one line, even. Can make it super clean and take us even closer to removing coupling w/ Mongoose/MongoDB.
  add(text, category) {
    return this.collection.create({ text, category }); // Even cleaner
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id).then(() =>
      console.log('DELETED NOTE - ID: ,', id)
    );
  }

  async list(category) {
    let query = category ? { category } : {};
    let notes = await NotesModel.find(query);
    notes.forEach((note) => {
      console.log(note.text);
      console.log(`Category: ${note.category}`);
      console.log(`ID: ${note.id}`);
      console.log('-----------------------------');
    });
    return;
  }
}

module.exports = Notes;
