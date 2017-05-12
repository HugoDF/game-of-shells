import React from 'react';

function Shells(props) {
  const { shells, game } = props;
  return (
    <div className="shells">
    {
      Array.isArray(shells) &&
      shells.map((el, i) => {
        const isGuess = game.guessId === el.id;
        const modifierClasses = [
          el.hasBall && 'has-ball',
          `game-${game.state && game.state.toLowerCase()}`,
          isGuess && 'guessed'
        ].filter(Boolean).join(' ');
        return (
          <div
            key={i}
            className={`shell ${modifierClasses}`}
            onClick={props.selectShell.bind(null, el.id)}
            />
        );
      })
    }
    </div>
  );
}

export default Shells;
