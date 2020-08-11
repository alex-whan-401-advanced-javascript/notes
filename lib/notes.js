'use strict';
function Notes() {
  this.id = 10; // placeholder stub
  this.text = this.opts.payload;
}

Notes.prototype.execute = function (opts) {
  if (opts.action.toLowerCase() === 'add') {
    this.add(this.id, this.text);
  }
};

Notes.prototype.add = function (id, text) {
  if (id && text) {
    console.log(`ID: ${id}`);
    console.log(`Text: ${text}`);
  }
};

module.exports = Notes;
