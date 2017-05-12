import React from 'react';

function GameControls(props) {
  const { state } = props;
  switch(state) {
    case 'INITIAL':
      return (
        <div className="GameControls">
          <div className="button" onClick={props.start}>Start</div>
        </div>
      )
    case 'SHUFFLE':
      return (
        <div className="GameControls">
          <h1>Shuffling...</h1>
        </div>
      );
    case 'START':
      return (
        <div className="GameControls">
          <h1>Click the shell you think contains the ball.</h1>
        </div>
      );
    case 'SUCCESS':
      return (
        <div className="GameControls">
          <h1>You've correctly guessed the shell</h1>
          <div className="button" onClick={props.start}>Restart</div>
        </div>
      );
    case 'FAILED':
      return (
        <div className="GameControls">
          <h1>You haven't guessed the correct shell</h1>
          <div className="button" onClick={props.start}>Restart</div>
        </div>
      )
    default:
      return (
        <div className="GameControls">
          <div className="button" onClick={props.start}>Restart</div>
        </div>
      );
  }
}

export default GameControls


