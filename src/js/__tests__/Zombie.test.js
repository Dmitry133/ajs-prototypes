import Zombie from '../Zombie';

test('check zombie is created', () => {
  const player = new Zombie('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

test('check Zombie error type', () => {
  expect(() => {
    const player = new Zombie('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
