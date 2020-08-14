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
});

// Compare Props helper function
// Note: It's going through every key in A - NOT in B. So, order matters here. We'll hit all the "A" keys in this loop.
function compareProps(a, b) {
  for (const key in a) {
    expect(a[key]).toBe(b[key]);
  }
}
