import {
    cell,
    enableGameBoard,
    enableGameBoard_2,
    enableGameBoard_3,
    startButton,
    endGame,
    backButton,
    stopButton,
} from "./references.js";

import {
    backToMainPage,
    chooseTheTableFunction,
    enableGameBoardView,
    enableGameBoardView_2,
    enableGameBoardView_3,
} from "./state.js";

import {
    start,
    delegal,
    bulbAction,
    winOrNotCheck,
} from "./events.js";




//addeventListenerek
enableGameBoard.addEventListener('click', enableGameBoardView);
enableGameBoard_2.addEventListener('click', enableGameBoardView_2);
enableGameBoard_3.addEventListener('click', enableGameBoardView_3);
startButton.addEventListener('click', chooseTheTableFunction);
delegal(cell, 'td', 'click', bulbAction);
endGame.addEventListener('click', winOrNotCheck);
backButton.addEventListener('click', backToMainPage);
stopButton.addEventListener('click', start);