import { getHistory } from './gameSelector';

describe('Game Selector', () => {
  it('gets Game History', () => {
    const state = {
      game: [
        {
          coffees: 2,
          snacks: 1,
          naps: 4,
          studies: 0
        },
        {
          coffees: 0,
          snacks: 1,
          naps: 2,
          studies: 4
        }
      ]
    };

    const history = getHistory(state);
    expect(history).toEqual([
      {
        coffees: 2,
        snacks: 1,
        naps: 4,
        studies: 0
      },
      {
        coffees: 0,
        snacks: 1,
        naps: 2,
        studies: 4
      }
    ]);
  });
});
