'use strict';
function Notes() {}

Notes.prototype.execute = function (opts) {
  if (opts.action.toLowerCase() === 'add') {
    this.add(opts);
  }
};

Notes.prototype.add = function (opts) {
  if (opts) {
    console.log(`Action: ${opts.action}`);
    console.log(`Payload: ${opts.payload}`);
  }
};

module.exports = Notes;
