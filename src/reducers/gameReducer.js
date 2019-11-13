import SAVE_GAME from '../actions/gameAction';

const gameState = [];

export default function reducer(state = gameState, action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
