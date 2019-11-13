export const getCoffees = state => state.mood.coffees;
export const getSnacks = state => state.mood.snacks;
export const getNaps = state => state.mood.naps;
export const getStudies = state => state.mood.studies;
export const getReset = state => state.mood;

export const getActions = state => [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: getCoffees(state) },
  { name: 'EAT_SNACK', text: 'Snack', count: getSnacks(state) },
  { name: 'TAKE_NAP', text: 'Nap', count: getNaps(state) },
  { name: 'STUDY', text: 'Study', count: getStudies(state) },
  { name: 'RESET', text: 'Reset' }
];

export const isTired = state => getCoffees(state) < 1 && getNaps(state) < 1;
export const isHyper = state => getCoffees(state) > 3;
export const isEducated = state => getStudies(state) > 2;
export const isHungry = state => getSnacks(state) < 1;
export const isSatisfied = state => getSnacks(state) > 3;
export const isAsleep = state => getNaps(state) > 3;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isAsleep(state)) return '😪';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  if(isSatisfied(state)) return '😋';

  return '😀';
};
