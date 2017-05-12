import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import {
  insertBall,
  multiShuffle,
  startGame,
  selectShell
} from './actions';

import GameControls from './components/GameControls';
import Shells from './components/Shells';

export function App(props) {
  const { shells = [], game = {} } = props;
  const selectShell = game.state === 'START' ? props.selectShell : () => {};
  return (
    <div className="App">
      <Shells
        game={game}
        shells={shells}
        selectShell={selectShell} />
      <GameControls
        start={props.start}
        {...game} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { shells, game } = state;
  return {
    shells,
    game
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => {
      dispatch(insertBall());
      setTimeout(
        () => {
          multiShuffle(dispatch, 3, 500, () => {
            dispatch(startGame());
          });
        },
        500
      )
    },
    selectShell: (id) => {
      dispatch(selectShell(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
