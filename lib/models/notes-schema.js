'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  category: { type: String, default: 'general', required: true },
  test: { type: String, required: true },
});

module.exports = mongoose.model('notes', notes);
