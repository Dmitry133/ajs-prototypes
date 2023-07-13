import Bowman from '../Bowman';

test('check bowman is created', () => {
  const player = new Bowman('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Bowman error levelUp', () => {
  expect(() => {
    const player = new Bowman('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Bowman levelUp', () => {
  const player = new Bowman('player');
  player.levelUp();
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    },
  );
});

test('check Bowman damage', () => {
  const player = new Bowman('player');
  player.damage(15);
  expect(player.health).toBeCloseTo(88.75);
});

test('check Bowman error damage', () => {
  expect(() => {
    const player = new Bowman('player');
    player.health = -1;
    player.damage(15);
  }).toThrowError('Потрачено!))');
});

test('check Bowman error name', () => {
  expect(() => {
    const player = new Bowman('MegaNagibator228(6b-klass)');
    return player;
  }).toThrowError('неправильное имя');
});
