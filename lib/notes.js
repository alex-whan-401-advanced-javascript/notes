#!/usr/bin/env node

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

  async add(text, category) {
    return await this.collection.create({ text, category }); // Even cleaner
  }

  // async delete(id) {
  //   await NotesModel.findByIdAndDelete(id).then(() =>
  //     console.log('DELETED NOTE - ID: ,', id)
  //   );
  // }

  async delete(id) {
    return await this.collection.delete({ id });
  }

  async list(category) {
    let query = category ? { category } : {};
    let notes = await this.collection.get(query);
    notes.forEach((note) => {
      console.log(note.text);
      console.log(`Category: ${note.category}`);
      console.log(`ID: ${note.id}`);
      console.log('-----------------------------');
    });
    return;
  }

  // list(category) {
  //   let query = category ? { category } : {};
  //   let notes = NotesModel.find(query);
  //   notes.forEach((note) => {
  //     console.log(note.text);
  //     console.log(`Category: ${note.category}`);
  //     console.log(`ID: ${note.id}`);
  //     console.log('-----------------------------');
  //   });
  //   return;
  // }
}

module.exports = Notes;
