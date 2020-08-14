'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

let notes = new Notes();
jest.spyOn(notes, 'add');

describe('Notes Module', () => {
  it('nothing logged to the console if no valid options given', () => {
    return notes.execute({}).then(() => {
      expect(notes.add).not.toHaveBeenCalled;
    });
  });

  it('add() will add a note', () => {
    const action = 'add';
    const payload = 'test note';
    const note = notes.execute({ action, payload });
    expect(notes.add).toHaveBeenCalled();
  });

  it('can display a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload }).then((results) => {
      expect(results.category).toBe('general');
      expect(results.payload).toBe('test note');
    });
  });
});
