import { getCoffees, getSnacks, getNaps, getStudies, getFace, getActions } from './moodSelector';

describe('Mood Selector', () => {
  it('should get a coffee', () => {
    const state = {
      mood: {
        coffees: 2,
        snacks: 0,
        naps: 0,
        studies: 0
      }
    };
    const coffee = getCoffees(state);
    expect(coffee).toBe(2);
  });

  it('should get a snack', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 2,
        naps: 0,
        studies: 0
      }
    };
    const snack = getSnacks(state);
    expect(snack).toBe(2);
  });

  it('should get naps', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 0,
        naps: 10,
        studies: 0
      }
    };
    const nap = getNaps(state);
    expect(nap).toBe(10);
  });

  it('should get studies', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 5
      }
    };
    const study = getStudies(state);
    expect(study).toBe(5);
  });

  it('gets an emoji', () => {
  const state = {
    mood: {
      coffees: 1,
      snacks: 2,
      naps: 4,
      studies: 1
    }
  };

  const face = getFace(state);
  expect(face).toEqual('😪');
  });

  it('can get actions', () => {
  const state = {
    mood: {
      coffees: 2,
      snacks: 3,
      naps: 10,
      studies: 5
    }
  };

  const actions = getActions(state);
    expect(actions).toEqual([
      { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: 2 },
      { name: 'EAT_SNACK', text: 'Snack', count: 3 },
      { name: 'TAKE_NAP', text: 'Nap', count: 10 },
      { name: 'STUDY', text: 'Study', count: 5 },
      { name: 'RESET', text: 'Reset' }
    ]);
  });
});

