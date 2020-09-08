'use strict';
const NotesModel = require('./notes-schema.js');

class NotesCollection {
  async create(info) {
    let note = new NotesModel(info);
    return await note.save();
  }

  async get(query) {
    return await NotesModel.find(query);
  }

  async delete(id) {
    try {
      await NotesModel.findByIdAndDelete(id);
      Promise.resolve(true);
    } catch (e) {
      return Promise.resolve(this);
    }
  }

  // only for our tests - let's get rid of this
  async clear() {
    return await NotesModel.deleteMany({});
  }
}

module.exports = NotesCollection;
