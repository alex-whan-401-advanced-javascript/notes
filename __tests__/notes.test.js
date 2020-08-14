'use strict';

const Notes = require('../lib/notes.js');

let notes = new Notes();
jest.spyOn(notes, 'add');

describe('Notes Module', () => {
  it('nothing logged to the console if no valid options given', () => {
    return notes.execute({}).then(() => {
      expect(notes.add).not.toHaveBeenCalled;
    });
  });

  it.skip('add() will add a note', async () => {
    const action = 'add';
    const payload = 'test note';
    const note = await notes.execute({ action, payload });
    expect(true).toBe(false);
    // expect(notes.add).toHaveBeenCalled();
  });
});
