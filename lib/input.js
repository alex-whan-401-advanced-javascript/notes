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

    let arg = Object.keys(args).filter((arg) => argsMap[arg])[0];

    return {
      action: argsMap[arg],
      payload: args[arg],
    };
  }

  valid() {
    return !!(this.command.action && this.command.payload);
  }
}

module.exports = Input;
