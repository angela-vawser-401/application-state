import { combineReducers } from 'redux';
import mood from './moodReducer';
import game from './gameReducer';

export default combineReducers({
  mood,
  game
});
