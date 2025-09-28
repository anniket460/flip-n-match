import "./ModeSelection.scss";
import { useDispatch } from "react-redux";
import { setCurrentScreen, setLevelNumber } from "../redux/redux.actions";
import easyImage from "../../assets/easy_image.png";
import hardImage from "../../assets/hard_image.png";

const ModeSelection = () => {
  const dispatch = useDispatch();
  const handleModeSelect = (modeNum: number) => {
    dispatch(setLevelNumber(modeNum));
    dispatch(setCurrentScreen("flip-n-match"));
  };
  return (
    <div className="mode-selection-screen-bg">
      <div className="wooden-board-left-bird"></div>
      <div className="wooden-board-mode-selection-bg">
        <div className="mode-button" onClick={() => handleModeSelect(1)}>
          <h1>Easy</h1>
          <img src={easyImage} />
        </div>
        <div className="mode-button" onClick={() => handleModeSelect(2)}>
          <h1>Hard</h1>
          <img src={hardImage} />
        </div>
      </div>
      <div className="wooden-board-right-bird"></div>
    </div>
  );
};

export default ModeSelection;
