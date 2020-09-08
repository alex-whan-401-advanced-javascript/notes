/* eslint-disable comma-dangle */
'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(global.console, 'log');
let spy = jest.spyOn(notes, 'add');

const NotesModel = require('../lib/models/notes-schema.js');

beforeEach(async () => {
  return NotesModel.deleteMany({});
});

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

  it.skip('can display a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload }).then(results => {
      expect(results.category).toBe('general');
      expect(results.payload).toBe('test note');
    });
  });

  it('should be able to list stored notes from the database', async () => {
    const action = 'add';
    const payload = 'testing list';
    await notes.execute({ action, payload });
    await notes.execute({ action: 'list' });
    expect(spy).toHaveBeenCalled();
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
    await notes.execute({
      action: 'delete',
      payload: addedNote._id,
    });
    expect(console.log).toHaveBeenCalledWith('DELETED NOTE: ', addedNote._id);
  });
});
