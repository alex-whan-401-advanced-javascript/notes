'use strict';
const NotesModel = require('./notes-schema.js');

class NotesCollection {
  async create(info) {
    let note = new NotesModel(info);
    return await note.save();
  }

  async get() {
    return await NotesModel.find({});
  }

  async delete() {
    return await NotesModel.deleteOne({ _id: id });
  }
}

module.exports = NotesCollection;
