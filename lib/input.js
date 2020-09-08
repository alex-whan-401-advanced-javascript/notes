'use strict';

const minimist = require('minimist');
class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args) {
    const argsMap = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };

    const acceptableArgs = Object.keys(args).find(key => argsMap[key]);

    const category = args.c || args.category;

    const action = argsMap[acceptableArgs];

    const payload =
      typeof args[acceptableArgs] === 'string'
        ? args[acceptableArgs]
        : undefined;

    return {
      action,
      payload,
      category,
    };
  }

  valid() {
    if (!this.command.action) {
      return false;
    }

    if (this.command.action === 'add') {
      if (!this.command.payload) {
        return false;
      }
    }

    if (this.command.action === 'delete') {
      if (!this.command.payload) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Input;
