'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Input = require('../lib/input.js');

describe('Input Module', () => {
  it('parse() creates a good object', () => {
    let options = new Input();
    let command = options.parse({ a: 'test' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('test');
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.command = {}; // break it
    expect(options.valid()).toBeFalsy();
  });
});

const Notes = require('../lib/notes.js');

// Jest Docs:
// jest.spyOn(object, methodName) - tracks calls to object.methodName

xdescribe('Notes Module', () => {
  it('nothing logged to the console if no command given', () => {
    let opts = new Input();
    opts.command = {};
    let notes = new Notes(opts);
    const spy = jest.spyOn(notes, 'execute'); //spies on execute method of notes instantiation

    beforeEach(() => {
      spy.mockReset();
    });

    afterEach(() => {
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
