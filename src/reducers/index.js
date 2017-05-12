import {
  INSERT_BALL,
  SHUFFLE_SHELLS,
  shuffle,
  START_GAME,
  SELECT_SHELL
} from '../actions';

import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case INSERT_BALL:
      let shells = state.shells.map((el) => ({...el, hasBall: false}));
      shells.find(({id}) => id === action.insertId).hasBall = true;
      return {
        ...state,
        shells,
        game: {
          state: 'INITIAL'
        }
      };
    case SHUFFLE_SHELLS:
      shells = shuffle([...state.shells]);
      return {
        ...state,
        shells,
        game: {
          state: 'SHUFFLE'
        }
      };
    case START_GAME:
      return {
        ...state,
        game: {
          state: 'START'
        }
      }
    case SELECT_SHELL:
      if(state.shells.find(({id}) => id === action.id).hasBall) {
        return {
          ...state,
          game: {
            state: 'SUCCESS',
            guessId: action.id
          }
        }
      }
      return {
        ...state,
        game: {
          state: 'FAILED',
          guessId: action.id
        }
      }
    default:
      return state;
  }
}

export default rootReducer;
