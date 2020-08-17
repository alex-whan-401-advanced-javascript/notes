'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/models/notes-collection.js');

describe('Notes Collection', () => {
  it.skip('should create - sunny day - when everything goes right', async () => {
    const notesCollection = new NotesCollection();
    const noteData = {
      text: 'Sweet taste of victory',
      category: 'Lots of reasons to celebrate.',
    };
    const note = await notesCollection.create();
    compareProps(noteData, note);
  });

  it('should create with no "category" given', async () => {
    const notesCollection = new NotesCollection();
    const noteData = { text: 'Check out this generic note.' };
    const note = await notesCollection.create(noteData);
  });

  it('should delete given a good ID', async () => {
    const notesCollection = new NotesCollection();
    const noteData = { text: 'Check out this generic note.' };
    const note = await notesCollection.create(noteData);
    await notesCollection.delete(note._id);
    const deletedNote = await notesCollection.get({ _id: 'note._id' });
    expect(deletedNote).toBeFalsy();
  });
});

// Compare Props helper function
// Note: It's going through every key in A - NOT in B. So, order matters here. We'll hit all the "A" keys in this loop.
function compareProps(a, b) {
  for (const key in a) {
    expect(a[key]).toBe(b[key]);
  }
}
