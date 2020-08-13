const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');

let opts = new Input();
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
    return notes.execute({ action, payload }).then(() => {
      expect(notes.add).toHaveBeenCalled();
    });
  });
});
