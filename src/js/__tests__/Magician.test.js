import Magician from '../Magician';

test('check magician is created', () => {
  const player = new Magician('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Magician error type', () => {
  expect(() => {
    const player = new Magician('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
