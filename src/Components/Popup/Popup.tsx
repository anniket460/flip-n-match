import "./Popup.scss";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../redux/reducer";
import earthImg from "../../assets/earth.png";
import rockImg from "../../assets/rock.png";
import earthRockTie from "../../assets/earth_rock_tie.png";
import { replayGame } from "../redux/redux.actions";

const Popup = () => {
  const player1Score = useSelector((state: ReduxState) => state.player1Score);
  const player2Score = useSelector((state: ReduxState) => state.player2Score);
  const winner = player1Score > player2Score ? "Player 1 Won" : "Player 2 Won";
  const dispatch = useDispatch();
  const handleReplayGame = () => {
    dispatch(replayGame());
  };
  return (
    <>
      <div className="popup-wrapper"></div>
      <div className="popup-bg">
        <h1>{player1Score === player2Score ? "It's a Tie!" : winner}</h1>
        <img
          src={
            player1Score === player2Score
              ? earthRockTie
              : player1Score > player2Score
              ? earthImg
              : rockImg
          }
          alt="winner image"
        />
        <div className="replay-subtitle">Tap to replay!</div>
        <div className="replay-icon" onClick={handleReplayGame}></div>
      </div>
    </>
  );
};

export default Popup;
