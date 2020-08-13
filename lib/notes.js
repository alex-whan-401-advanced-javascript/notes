'use strict';

class Notes {
  constructor(opts) {
    this.action = opts.command.action;
    this.payload = opts.command.payload;
  }

  async execute(noteObj) {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      default:
        break;
    }
  }

  add(payload) {
    console.log(`Adding Note: ${payload}`);
  }
}

module.exports = Notes;
