'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(global.console, 'log');

const NotesModel = require('../lib/models/notes-schema.js');

beforeEach(async () => {
  return NotesModel.deleteMany({});
});

it('should log properly after valid add', async () => {
  await notes.execute({ action: 'add', payload: 'Check this cool test!' });
  expect(console.log).toHaveBeenCalledWith(
    'NOTE SAVED: ',
    'Check this cool test!'
  );
});

// At this stage, this is checking on the FEEDBACK the user gets - as the under-the-hood stuff is already handled in the NotesCollection tests
it('should delete properly when given good ID', async () => {
  const addedNote = await notes.execute({
    action: 'add',
    payload: 'Check this cool test!',
  });
  jest.spyOn(global.console, 'log'); // global console log spy
  await notes.execute({ action: 'delete', payload: addedNote._id });
  expect(console.log).toHaveBeenCalledWith('DELETED NOTE: ', addedNote._id);
});

// Testing console log is tough - no way around it. We need to SPY on it "per test" so it clears itself out - however, there's not really a "spy OFF" button to go with the "spy ON" - how do we clear it?
