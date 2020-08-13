'use strict';

const NotesModel = require('./models/notes-schema.js');
const NotesCollection = require('./models/notes-collection.js');

class Notes {
  constructor() {
    this.collection = new NotesCollection();
  }

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

  // We want to do what we just did for add() to all of them.
  // As it relates to Notes Collection - it's a matter of doing what we commented out, in the style of "nc". Let's make a Class to make it easier.
  // Remove NC and do it on one line, even. Can make it super clean and take us even closer to removing coupling w/ Mongoose/MongoDB.
  async add(text, category) {
    // console.log(`Adding NOTE: ${text}`);
    // const newNote = new NotesModel({ category, text });
    // let saved = await newNote.save();
    // return saved;

    // const nc = new NotesCollection();

    return await this.collection.create({ text, category }); // Even cleaner
  }

  async delete(id) {}
  // await NotesModel.findByIdAndDelete(id).then(() =>
  //   console.log('DELETED NOTE: ', id))

  async list(category) {}
}

module.exports = Notes;
