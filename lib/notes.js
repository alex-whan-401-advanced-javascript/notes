'use strict';

const Notes = {};

Notes.fetch = function (opts) {
  if (opts) {
    console.log(`Fetching ${opts.payload}`);
    console.log(`Action ${opts.action}`);
  }
};

module.exports = Notes;

// node index.js --m POST --u "https://www.foo.bar"
