export const INSERT_BALL = 'INSERT_BALL';

function getRandomFromRange(start = 1, finish = 3) {
  return Math.floor(Math.random() * 3) + 1;
}

export function insertBall() {
  const insertId = getRandomFromRange(1, 3);
  return {
    type: INSERT_BALL,
    insertId
  }
}

export const SHUFFLE_SHELLS = 'SHUFFLE_SHELLS';

export function shuffle(array) {
  let copy = [];
  let n = array.length;
  while (n) {
    let i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}


export function shuffleShells() {
  return {
    type: SHUFFLE_SHELLS
  }
}

export function multiShuffle(dispatch, shuffleNumber, delay = 500, cb) {
  if(shuffleNumber > 1) {
    setTimeout(
      () => {
        multiShuffle(dispatch, shuffleNumber - 1, delay, cb);
      },
      delay
    );
  }
  dispatch(shuffleShells());
  if(shuffleNumber === 1){
    cb();
  }
}

export const START_GAME = 'START_GAME';

export function startGame() {
  return {
    type: START_GAME
  };
}

export const SELECT_SHELL = 'SELECT_SHELL';

export function selectShell(id) {
  return {
    type: SELECT_SHELL,
    id
  }
}
