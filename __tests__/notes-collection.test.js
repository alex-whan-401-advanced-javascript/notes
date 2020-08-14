'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/models/notes-collection.js');

// Signature: how many and of what kind of arguments, plus a return value
describe.skip('Notes Collection', () => {
  it('should create - sunny day - when everything goes right', async () => {
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

// This compareProps can replace all this:
// expect(note._id).toBeDefined();
// expect(note.text).toBe(noteData.text);
// expect(note.category).toBe(noteData.category);

// Action and payload are important for this app - but not for the NotesCollection model per se
// When you're dealing with ASYNC stuff, always ask yourself: Is this a promise? Should I just add async? Async is easy to add - even to anonymous arrow functions
