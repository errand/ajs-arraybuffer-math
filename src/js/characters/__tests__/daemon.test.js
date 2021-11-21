import Daemon from '../Daemon';

test('Test sober Daemon', () => {
  const expected = {
    name: 'Begemot',
    _attack: 10,
    _stoned: false,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Daemon('Begemot', 'Daemon');

  expect(received).toEqual(expected);
});

test('Test stoned Begemot hits 2', () => {
  const expected = {
    name: 'Begemot',
    _attack: 85,
    _stoned: true,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  Begemot.attack = 2;

  expect(Begemot).toEqual(expected);
});

test('Test stoned Begemot hits 3', () => {
  const expected = {
    name: 'Begemot',
    _attack: 72.08,
    _stoned: true,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  Begemot.attack = 3;

  expect(Begemot).toEqual(expected);
});

test('Test stoned Begemot hits 4', () => {
  const expected = {
    name: 'Begemot',
    _attack: 60,
    _stoned: true,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  Begemot.attack = 4;

  expect(Begemot).toEqual(expected);
});

test('Test stoned Begemot hits 5', () => {
  const expected = {
    name: 'Begemot',
    _attack: 48.39,
    _stoned: true,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  Begemot.attack = 5;

  expect(Begemot).toEqual(expected);
});

test('Test stoned Begemot hits 1', () => {
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  // eslint-disable-next-line no-return-assign
  expect(() => Begemot.attack = 0).toThrow();
});

test('Test stoned Begemot hits 6', () => {
  const Begemot = new Daemon('Begemot', 'Daemon');
  Begemot._attack = 100;
  Begemot.stoned = true;
  // eslint-disable-next-line no-return-assign
  expect(() => Begemot.attack = 6).toThrow();
});
