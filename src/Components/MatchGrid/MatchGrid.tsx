import { useState } from "react";
import "./MatchGrid.scss";
import cardBg from "../../assets/clouds.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../redux/reducer";
import {
  setCurrentPlayer,
  setMatchedElement,
  setPlayer1Score,
  setPlayer2Score,
} from "../redux/redux.actions";

interface MatchGridProps {
  mazeData: string[];
}

const MatchGrid: React.FC<MatchGridProps> = ({ mazeData }: MatchGridProps) => {
  const [clickedIdx1, setClickedIdx1] = useState(-1);
  const [clickedIdx2, setClickedIdx2] = useState(-1);
  const [firstImg, setFirstImg] = useState("");
  const matchedElementArray = useSelector(
    (state: ReduxState) => state.matchedElementArray
  );
  const currentPlayer = useSelector((state: ReduxState) => state.currentPlayer);
  const player1Score = useSelector((state: ReduxState) => state.player1Score);
  const player2Score = useSelector((state: ReduxState) => state.player2Score);
  const dispatch = useDispatch();

  const handleCardClick = (idx: number, imageUrl: string) => {
    if (clickedIdx1 === -1) {
      // Store first index and image
      setClickedIdx1(idx);
      setFirstImg(imageUrl);
    } else {
      setClickedIdx2(idx);
      if (imageUrl === firstImg) {
        // Correctly mathced
        dispatch(setMatchedElement(clickedIdx1, idx));
        currentPlayer === 1
          ? dispatch(setPlayer1Score(player1Score + 10))
          : dispatch(setPlayer2Score(player2Score + 10));
      } else {
        // Not matched hence player change
        dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
      }
      // Set first and second clicked state back to -1 after 1.5 seconds
      setTimeout(() => {
        setClickedIdx1(-1);
        setClickedIdx2(-1);
      }, 1500);
    }
  };
  return (
    <div className="match-grid">
      <div className="grid-btn-container">
        {mazeData.map((imageUrl, index) => (
          <button
            key={index}
            className="grid-button"
            disabled={clickedIdx2 !== -1}
            style={{
              backgroundImage:
                clickedIdx1 === index ||
                clickedIdx2 === index ||
                matchedElementArray[index]
                  ? `url(${imageUrl})`
                  : `url(${cardBg})`,
            }}
            onClick={() => handleCardClick(index, imageUrl)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MatchGrid;
