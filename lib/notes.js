'use strict';

class Notes {
  constructor(opts) {
    this.action = opts.command.action;
    this.payload = opts.command.payload;
  }

  execute() {
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
