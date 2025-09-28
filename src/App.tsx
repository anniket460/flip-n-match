import "./App.css";
import FindTheMatchApp from "./Components/FIndTheMatchApp/FindTheMatchApp";
import ResizablePlayerContainer from "./Components/ResizableComponent/ResizableComponent";
import { Provider, useSelector } from "react-redux";
import { store } from "./Components/redux/store";
import StartScreen from "./Components/StartScreen/StartScreen";
import { ReduxState } from "./Components/redux/reducer";
import ModeSelection from "./Components/ModeSelection/ModeSelection";

function App() {
  const currentScreen = useSelector((state: ReduxState) => state.currentScreen);

  const renderScreen = (screenName: string) => {
    if (screenName === "game-title") {
      return <StartScreen />;
    } else if (screenName === "play-mode") {
      return <ModeSelection />;
    } else if (screenName === "flip-n-match") {
      return <FindTheMatchApp />;
    } else {
      return <>No Screen Found</>;
    }
  };
  return (
    <>
      <Provider store={store}>
        <ResizablePlayerContainer>
          {renderScreen(currentScreen)}
        </ResizablePlayerContainer>
      </Provider>
    </>
  );
}

export default App;
