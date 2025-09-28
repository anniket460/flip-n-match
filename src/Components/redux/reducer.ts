import { ActionType } from "./redux.types";

type actionType = {
  type: string;
  payload: any;
};

export interface ReduxState {
  currentScreen: string;
  levelNumber: number;
  screenScaleFactor: number;
  matchedElementArray: boolean[];
  player1Score: number;
  player2Score: number;
  currentPlayer: number;
}
const initialState: ReduxState = {
  currentScreen: "game-title",
  levelNumber: 1,
  screenScaleFactor: 1,
  matchedElementArray: Array(20).fill(false),
  player1Score: 0,
  player2Score: 0,
  currentPlayer: 1,
};

export const reducer = (
  state = initialState,
  action: actionType
): ReduxState => {
  switch (action.type) {
    case ActionType.SET_SCREENSCALE_FACTOR:
      return {
        ...state,
        screenScaleFactor: action.payload,
      };
    case ActionType.SET_CURRENT_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };
    case ActionType.SET_LEVEL_NUMBER:
      return {
        ...state,
        levelNumber: action.payload,
      };
    case ActionType.SET_MATCHED_ELEMENTS:
      const newMatchedElementArray = [...state.matchedElementArray];
      const { number1, number2 } = action.payload;
      newMatchedElementArray[number1] = true;
      newMatchedElementArray[number2] = true;
      return {
        ...state,
        matchedElementArray: newMatchedElementArray,
      };
    case ActionType.SET_PLAYER1_SCORE:
      return {
        ...state,
        player1Score: action.payload,
      };
    case ActionType.SET_PLAYER2_SCORE:
      return {
        ...state,
        player2Score: action.payload,
      };
    case ActionType.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case ActionType.REPLAY_GAME:
      return initialState;
    default:
      return {
        ...state,
      };
  }

  return state;
};

export default reducer;
