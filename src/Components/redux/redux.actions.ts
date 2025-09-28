import { ActionType } from "./redux.types";

export const setCurrentScreen = (screenValue: string) => ({
  type: ActionType.SET_CURRENT_SCREEN,
  payload: screenValue,
});

export const setLevelNumber = (levelNum: number) => ({
  type: ActionType.SET_LEVEL_NUMBER,
  payload: levelNum,
});

export const setScreenScaleFactor = (scaleFactor: number) => ({
  type: ActionType.SET_SCREENSCALE_FACTOR,
  payload: scaleFactor,
});

export const setMatchedElement = (number1: number, number2: number) => ({
  type: ActionType.SET_MATCHED_ELEMENTS,
  payload: { number1, number2 },
});

export const setPlayer1Score = (player1Score: number) => ({
  type: ActionType.SET_PLAYER1_SCORE,
  payload: player1Score,
});

export const setPlayer2Score = (player2Score: number) => ({
  type: ActionType.SET_PLAYER2_SCORE,
  payload: player2Score,
});

export const setCurrentPlayer = (currentPlayer: number) => ({
  type: ActionType.SET_CURRENT_PLAYER,
  payload: currentPlayer,
});

export const replayGame = () => ({
  type: ActionType.REPLAY_GAME,
});
