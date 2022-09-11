// on import useDispatch depuis react-redux
import { useStore } from "react-redux";
import { setPlaying, pointScored } from "./actions";

export function PlayPauseButton() {
  const store = useStore();

  return (
    <button
      className="button"
      onClick={() => {
        const isPlaying = store.getState().playing;
        if (isPlaying) {
          // déja en train de jouer on ne fait rien
          return;
        }
        //on indique que la partie est en cours
        store.dispatch(setPlaying(true));
        // on utilise setTimeout pour attendre 2 secondes
        window.setTimeout(() => {
          // le jeu est_il toujour en cours ?
          if (store.getState().playing === false) {
            //si non on ne fait rien
            return;
          }
          // si oui on marque un point aléatoire
          const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
          store.dispatch(pointScored(pointWinner));
          // on remet le jeu en pause
          store.dispatch(setPlaying(false));
        }, 2000)
      }}
    >
      Pause / Reprendre
    </button>
  );
}
