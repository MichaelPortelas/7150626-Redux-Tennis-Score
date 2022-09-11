// actions creators

export const setPlaying = (playing) => ({ 
    type: "setPlaying",
    payload: playing,
  });
  
export const restartGame = () => ({ type: "restart" });

export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player },
    });