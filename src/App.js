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

function App(props) {
  const { shells, game } = props;
  return (
    <div className="App">
      <div className="shells">
        {
          shells.map((el, i) => {
            const isGuess = game.guessId === el.id;
            const modifierClasses = [
              el.hasBall && 'has-ball',
              `game-${game.state.toLowerCase()}`,
              isGuess && 'guessed'
            ].filter(Boolean).join(' ');
            return (
              <div
                key={i}
                className={`shell ${modifierClasses}`}
                onClick={props.selectShell.bind(null, el.id)}
                />
            )
          })
        }
      </div>
      <GameControls {...props} {...game} />
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
