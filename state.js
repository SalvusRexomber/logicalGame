import {
    cell,
    levelInput,
    timerName,
    gameBoardArea,
    startmenu,
    chosenOne,
    userName,
} from "./references.js";

import {
    reset,
    start,
} from "./events.js";

export let tableArray;
export let number = 1;
export let cellAll;
export let allFixElement;
export let startGame = false;


export function generatedNewEmptyTable() {


    cell.innerHTML = '';

    levelInput.innerText = "Kezdő szint (7 x 7)";

    tableArray = [
        [0, 0, 0, -1, 0, 0, 0],
        [0, -50, 0, 0, 0, -2, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, -2, 0],
        [0, 0, 0, -3, 0, 0, 0]
    ];


    for (let i = 0; i < 7; i++) {
        const rowSingle = document.createElement("tr");
        rowSingle.setAttribute("class", "rowClass");
        for (let j = 0; j < 7; j++) {
            const cellSingle = document.createElement("td");
            cellSingle.setAttribute("class", "cell");
            rowSingle.appendChild(cellSingle);
        }
        cell.appendChild(rowSingle);
    }


    cellAll = document.querySelectorAll('.cell');
    let elem;
    for (elem of cellAll) {
        elem.setAttribute('id', `${number}`);
        if (number === 4) {
            elem.innerText = '1';
            elem.classList.add('fixElement');
        } else if (number === 9) {
            elem.innerText = '0';
            elem.classList.add('fixElement');
        } else if (number === 13 || number === 41) {
            elem.innerText = '2';
            elem.classList.add('fixElement');
        } else if (number === 46) {
            elem.innerText = '3';
            elem.classList.add('fixElement');
        } else if (number === 22 || number === 25 || number === 28 || number === 37) {
            elem.classList.add('fixElement');
            elem.classList.add('null');
        }
        number++;

    }
    allFixElement = document.querySelectorAll('.cell.fixElement');
    startGame = true;
    number = 1;
}

export function generatedNewEmptyTable_2() {

    levelInput.innerText = "Haladó szint (7 x 7)";
    cell.innerHTML = '';


    tableArray = [
        [0, 0, -50, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, -3, 0, 0],
        [0, 0, 0, -1, 0, 0, 0],
        [-2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, -2, 0, 0]
    ];


    for (let i = 0; i < 7; i++) {
        const rowSingle = document.createElement("tr");
        rowSingle.setAttribute("class", "rowClass");
        for (let j = 0; j < 7; j++) {
            const cellSingle = document.createElement("td");
            cellSingle.setAttribute("class", "cell");
            rowSingle.appendChild(cellSingle);
        }
        cell.appendChild(rowSingle);
    }


    cellAll = document.querySelectorAll('.cell');
    let elem;
    for (elem of cellAll) {
        elem.setAttribute('id', `${number}`);
        if (number === 3) {
            elem.innerText = '0';
            elem.classList.add('fixElement');
        } else if (number === 25) {
            elem.innerText = '1';
            elem.classList.add('fixElement');
        } else if (number === 29 || number === 47) {
            elem.innerText = '2';
            elem.classList.add('fixElement');
        } else if (number === 19) {
            elem.innerText = '3';
            elem.classList.add('fixElement');
        } else if (number === 5 || number === 15 || number === 17 || number === 21 || number === 31 || number === 33 || number === 35 || number === 45) {
            elem.classList.add('fixElement');
            elem.classList.add('null');
        }
        number++;

    }
    allFixElement = document.querySelectorAll('.cell.fixElement');
    startGame = true;
    number = 1;
}

export function generatedNewEmptyTable_3() {

    levelInput.innerText = "Mester szint (10 x 10)";
    cell.innerHTML = '';


    tableArray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, -3, 0, -2, 0, 0],
        [0, -50, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, -1, 0, 0, 0, -1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, -3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, -1, 0, 0, 0, 0, -50, 0, 0],
        [-3, 0, 0, 0, -50, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, -50, 0]
    ];


    for (let i = 0; i < 10; i++) {
        const rowSingle = document.createElement("tr");
        rowSingle.setAttribute("class", "rowClass");
        for (let j = 0; j < 10; j++) {
            const cellSingle = document.createElement("td");
            cellSingle.setAttribute("class", "cell");
            rowSingle.appendChild(cellSingle);
        }
        cell.appendChild(rowSingle);
    }


    cellAll = document.querySelectorAll('.cell');
    let elem;
    for (elem of cellAll) {
        elem.setAttribute('id', `${number}`);
        if (number === 22 || number === 78 || number === 85 || number === 99) {
            elem.innerText = '0';
            elem.classList.add('fixElement');
        } else if (number === 42 || number === 73 || number === 46) {
            elem.innerText = '1';
            elem.classList.add('fixElement');
        } else if (number === 18) {
            elem.innerText = '2';
            elem.classList.add('fixElement');
        } else if (number === 16 || number === 59 || number === 81) {
            elem.innerText = '3';
            elem.classList.add('fixElement');
        } else if (number === 2 || number === 20 || number === 23 || number === 28 || number === 35 || number === 45 || number === 47 || number === 54 || number === 55 || number === 56 || number === 66 || number === 79 || number === 83) {
            elem.classList.add('fixElement');
            elem.classList.add('null');
        }
        number++;

    }
    allFixElement = document.querySelectorAll('.cell.fixElement');
    startGame = true;
    number = 1;
}


//Pályaválasztó
export let chooseTheTable = 0;

export function backToMainPage() {
    startmenu.style.display = 'flex';
    gameBoardArea.style.display = 'none';
}

export function chooseTheTableFunction() {
    if (chooseTheTable === 1) {
        generatedNewEmptyTable();
    } else if (chooseTheTable === 2) {
        generatedNewEmptyTable_2();
    } else if (chooseTheTable === 3) {
        generatedNewEmptyTable_3();
    }
    document.querySelector('#start').style.display = 'flex';
    start();
}


export function enableGameBoardView() {
    chooseTheTable = 1;
    boardareaDisplayData();
}

export function enableGameBoardView_2() {
    chooseTheTable = 2;
    boardareaDisplayData();
}

export function enableGameBoardView_3() {
    chooseTheTable = 3;
    boardareaDisplayData();
}


export function boardareaDisplayData() {
    startmenu.style.display = 'none';
    gameBoardArea.style.display = 'flex';
    reset();
    if (chosenOne.value === '') {
        userName.innerText = `Gyerünk! Meg tudod csinálni, Bajnok!`;
        timerName.innerText = `Bajnokunk játékideje:`;
    } else {
        userName.innerText = `Gyerünk! Meg tudod csinálni, ${chosenOne.value}!`;
        timerName.innerText = `${chosenOne.value} játékideje:`;
    }
}

//Pályaválasztó vége