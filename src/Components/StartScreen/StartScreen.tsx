import "./StartScreen.scss";
import { useDispatch } from "react-redux";
import { setCurrentScreen } from "../redux/redux.actions";

const StartScreen = () => {
  const dispatch = useDispatch();
  const hahandlePlayBtnClick = () => {
    dispatch(setCurrentScreen("play-mode"));
  };
  return (
    <div className="start-screen-bg">
      <div className="wooden-board-bg">
        <div className="game-title">Flip And Match</div>
        <div className="play-button" onClick={hahandlePlayBtnClick}></div>
      </div>
    </div>
  );
};

export default StartScreen;
