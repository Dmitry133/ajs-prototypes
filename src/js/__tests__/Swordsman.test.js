import Swordsman from '../Swordsman';

test('check swordsman is created', () => {
  const player = new Swordsman('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

test('check Swordsman error type', () => {
  expect(() => {
    const player = new Swordsman('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
