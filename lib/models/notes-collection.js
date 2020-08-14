'use strict';
const NotesModel = require('./notes-schema.js');

class NotesCollection {
  async create(info) {
    let note = new NotesModel(info);
    return await note.save();
  }

  async get(category) {
    return await NotesModel.find({ category });
  }

  async delete(id) {
    return await NotesModel.deleteOne({ _id: id });
  }

  async clear() {
    return await NotesModel.deleteMany({});
  }
}

module.exports = NotesCollection;
