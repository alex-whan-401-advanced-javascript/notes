'use strict';

const Input = require('../lib/input.js');

describe('Parse list', () => {
  it('should parse --list', () => {
    const input = new Input();
    const command = input.parse({ list: true });
    expect(command.action).toBe('list');
  });

  it('should parse -l', () => {
    const input = new Input();
    const command = input.parse({ l: true });
    expect(command.action).toBe('list');
  });
});

describe('Parse delete', () => {
  it('should parse --delete', () => {
    const input = new Input();
    const command = input.parse({ delete: 'someid' });
    expect(command.action).toBe('delete');
    expect(command.payload).toBe('someid');
  });

  it('should parse -d', () => {
    const input = new Input();
    const command = input.parse({ d: 'someid' });
    expect(command.action).toBe('delete');
    expect(command.payload).toBe('someid');
  });
});

describe('parse category', () => {
  it('should parse -a with payload and --category', () => {
    const input = new Input();
    const command = input.parse({
      a: 'good payload',
      category: 'good category',
    });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
    expect(command.category).toBe('good category');
  });

  it('should parse -a with payload and --c', () => {
    const input = new Input();
    const command = input.parse({
      a: 'good payload',
      c: 'good category',
    });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
    expect(command.category).toBe('good category');
  });
});
