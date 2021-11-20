import Magician from '../Magician';

test('Test sober Gandalf', () => {
  const expected = {
    name: 'Gandalf',
    _attack: 10,
    _stoned: false,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Magician('Gandalf', 'Magician');

  expect(received).toEqual(expected);
});

test('Test stoned Gandalf hits 2', () => {
  const expected = {
    name: 'Gandalf',
    _attack: 85,
    _stoned: true,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  gandalf.attack = 2;

  expect(gandalf).toEqual(expected);
});

test('Test stoned Gandalf hits 3', () => {
  const expected = {
    name: 'Gandalf',
    _attack: 72.08,
    _stoned: true,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  gandalf.attack = 3;

  expect(gandalf).toEqual(expected);
});

test('Test stoned Gandalf hits 4', () => {
  const expected = {
    name: 'Gandalf',
    _attack: 60,
    _stoned: true,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  gandalf.attack = 4;

  expect(gandalf).toEqual(expected);
});

test('Test stoned Gandalf hits 5', () => {
  const expected = {
    name: 'Gandalf',
    _attack: 48.39,
    _stoned: true,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  gandalf.attack = 5;

  expect(gandalf).toEqual(expected);
});

test('Test stoned Gandalf hits 1', () => {
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  // eslint-disable-next-line no-return-assign
  expect(() => gandalf.attack = 1).toThrow();
});

test('Test stoned Gandalf hits 6', () => {
  const gandalf = new Magician('Gandalf', 'Magician');
  gandalf._attack = 100;
  gandalf.stoned = true;
  // eslint-disable-next-line no-return-assign
  expect(() => gandalf.attack = 6).toThrow();
});
