import { useEffect, useState } from "react";
import MatchGrid from "../MatchGrid/MatchGrid";
import "./FindTheMatchApp.scss";
import { handleGridImg } from "./FindTheMatchHelper";
import { useSelector } from "react-redux";
import { ReduxState } from "../redux/reducer";
import earth from "../../assets/earth.png";
import rock from "../../assets/rock.png";
import Popup from "../Popup/Popup";

const FindTheMatchApp = () => {
  const [mazeData, setMazeData] = useState<string[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const currentPlayer = useSelector((state: ReduxState) => state.currentPlayer);
  const player1Score = useSelector((state: ReduxState) => state.player1Score);
  const player2Score = useSelector((state: ReduxState) => state.player2Score);
  const levelNumber = useSelector((state: ReduxState) => state.levelNumber);

  useEffect(() => {
    const getImgGrid = handleGridImg(levelNumber);
    setMazeData(getImgGrid);
  }, []);

  useEffect(() => {
    if (player1Score + player2Score === 100) {
      setTimeout(() => {
        setIsPopupOpen(true);
      }, 1000);
    }
  }, [player1Score, player2Score]);

  return (
    <>
      {isPopupOpen && <Popup />}
      <div className="find-the-match-title">Flip-N-Match</div>
      <div className="find-the-match-app">
        <div className="player1-container">
          <h1>Score : {player1Score}</h1>
          {currentPlayer === 1 && <img src={earth} alt="player 1" />}
        </div>
        <div className="find-the-match-maze">
          <MatchGrid mazeData={mazeData} />
        </div>
        <div className="player2-container">
          <h1>Score : {player2Score}</h1>
          {currentPlayer === 2 && <img src={rock} alt="player 2" />}
        </div>
      </div>
    </>
  );
};

export default FindTheMatchApp;
