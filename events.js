import {
    endResult,

} from "./references.js";

import {
    cellAll,
    chooseTheTable,
    tableArray,
    allFixElement,

} from "./state.js";

let hour = 0, sec = 0, min = 0;
let dispHour = 0, dispMin = 0, dispSec = 0;
let timeoutId = null;
let check = "stop";


//Időzítőre vonatkozó beállítások
export function timer() {
    sec++;
    if (sec / 60 == 1) {
        min++;
        sec = 0;
        if (min / 60 == 1) {
            hour++;
            min = 0;
        }
    }
    if (sec < 10) { dispSec = "0" + sec.toString(); }
    else { dispSec = sec.toString(); }
    if (min < 10) { dispMin = "0" + min.toString(); }
    else { dispMin = min.toString(); }
    if (hour < 10) { dispHour = "0" + hour.toString(); }
    else { dispHour = hour.toString(); }
    document.getElementById("timer").innerHTML = dispHour + ":" + dispMin + ":" + dispSec;
}


export function start() {
    if (check === "stop") {
        timeoutId = window.setInterval(timer, 1000);
        document.getElementById("start").innerHTML = "Stop";
        check = "start";
    } else {
        window.clearInterval(timeoutId);
        document.getElementById("start").innerHTML = "Start";
        check = "stop";
    }
}


export function reset() {
    window.clearInterval(timeoutId);
    sec = 0, min = 0, hour = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}
//Időzítőre vonatkozó beállítások vége

//Delegálás
export function delegal(szulo, gyerek, mikor, mitCsinal) {
    function esemenyKezelo(esemeny) {
        let esemenyCelja = esemeny.target;
        let legkozelebbiIlyen = esemenyCelja.closest(gyerek);
        let meghivoElem = this;


        if (meghivoElem.contains(legkozelebbiIlyen)) {
            mitCsinal(esemeny, legkozelebbiIlyen);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}
//Delegálás vége


export let temporaryNumberOfRowIndexForLight = 0;
export let temporaryNumberOfRowIndex = 0;


export function bulbAction(esemeny, cell) {
    if (startGame === false) {
        return
    } else {
        endResult.innerText = '';
        if (cell.classList.contains('fixElement')) {
            return;
        }
        else
            if (cell.classList.contains('bulbIsOnTheCell')) {
                cell.classList.remove('redLightElement')
                countOfBlackFileds(cell);
                cell.classList.remove("bulbIsOnTheCell");
                cell.innerHTML = '<td class="cell"></td>';
                lightOffColumns(cell);
                lightOffRows(cell);
                checkRedLightElementAfterRemoveBulb();

            } else {

                let newBulb = document.createElement('img');
                newBulb.src = 'lightbulb.jpg';
                newBulb.alt = "lightbulb";
                newBulb.width = "30";
                newBulb.height = "30";
                newBulb.style.padding = "2px 0 0 0";
                cell.appendChild(newBulb);
                lightOnColumns(cell);
                lightOnRows(cell);
                countOfBlackFileds(cell);
                cell.classList.add("bulbIsOnTheCell");

            }
    }
    blackCounterIsNull();
}





//Innen szabályozzuk a sor-oszlop fényerőt
export function lightOnColumns(cell) {

    let listOFlementLightColumns = [];
    let elem;
    for (elem of cellAll) {
        if (elem.cellIndex === cell.cellIndex) {
            listOFlementLightColumns.push(elem);
        }
    }
    blockTheLightColumns(cell, listOFlementLightColumns);
}

export function blockTheLightColumns(cell, listOFlementLightColumns) {

    if (chooseTheTable === 1 || chooseTheTable === 2) {
        temporaryNumberOfRowIndexForLight = 7;
    } else if (chooseTheTable === 3) {
        temporaryNumberOfRowIndexForLight = 10;
    }

    let index = parseInt(cell.parentNode.rowIndex);

    for (let i = index + 1; i < temporaryNumberOfRowIndexForLight; i++) {
        if (!listOFlementLightColumns[i].classList.contains('fixElement')) {
            lightOnCells(listOFlementLightColumns[i]);
        } else {
            break;
        }
    }
    for (let i = index - 1; i >= 0; i--) {
        if (!listOFlementLightColumns[i].classList.contains('fixElement')) {
            lightOnCells(listOFlementLightColumns[i]);
        } else {
            break;
        }
    }
    numberDelay = 0.1;

}

export function lightOnRows(cell) {
    let elem;
    let listOFlementLightRows = [];
    for (elem of cellAll) {
        if (elem.parentNode.rowIndex === cell.parentNode.rowIndex) {
            listOFlementLightRows.push(elem);
        }
    }
    blockTheLightRows(cell, listOFlementLightRows);
}


export function blockTheLightRows(cell, listOFlementLightRows) {
    let index = parseInt(cell.cellIndex);
    for (let i = index + 1; i < temporaryNumberOfRowIndexForLight; i++) {
        if (!listOFlementLightRows[i].classList.contains('fixElement')) {
            lightOnCells(listOFlementLightRows[i]);
        } else {
            break;
        }
    }
    for (let i = index; i >= 0; i--) {
        if (!listOFlementLightRows[i].classList.contains('fixElement')) {
            lightOnCells(listOFlementLightRows[i]);
        } else {
            break;
        }
    }
    numberDelay = 0.1;

}


export function lightOnCells(cellElement) {
    let columnIndexNumber = cellElement.cellIndex;
    let rowIndexNumber = cellElement.parentNode.rowIndex;
    tableArray[rowIndexNumber][columnIndexNumber]++;
    generateLightInCorrectFiled(cellElement);
}




//Fény lekapcsolása
export function lightOffColumns(cell) {
    let elem;
    let listOFlementLightColumns = [];
    for (elem of cellAll) {
        if (elem.cellIndex === cell.cellIndex) {
            listOFlementLightColumns.push(elem);
        }
    }
    blockTheOffLightColumns(cell, listOFlementLightColumns);
}





export function blockTheOffLightColumns(cell, listOFlementLightColumns) {
    let index = parseInt(cell.parentNode.rowIndex);
    for (let i = index + 1; i < temporaryNumberOfRowIndexForLight; i++) {
        if (!listOFlementLightColumns[i].classList.contains('fixElement')) {
            lightOffCells(listOFlementLightColumns[i]);
        } else {
            break;
        }
    }
    for (let i = index; i >= 0; i--) {
        if (!listOFlementLightColumns[i].classList.contains('fixElement')) {
            lightOffCells(listOFlementLightColumns[i]);
        } else {
            break;
        }
    }
}



export function lightOffRows(cell) {

    let listOFlementLightRows = [];
    let elem;
    for (elem of cellAll) {
        if (elem.parentNode.rowIndex === cell.parentNode.rowIndex) {
            listOFlementLightRows.push(elem);
        }
    }
    blockTheOffLightRows(cell, listOFlementLightRows);

}

export function blockTheOffLightRows(cell, listOFlementLightRows) {
    let index = parseInt(cell.cellIndex);

    for (let i = index + 1; i < temporaryNumberOfRowIndexForLight; i++) {
        if (!listOFlementLightRows[i].classList.contains('fixElement')) {
            lightOffCells(listOFlementLightRows[i]);
        } else {
            break;
        }
    }
    for (let i = index - 1; i >= 0; i--) {
        if (!listOFlementLightRows[i].classList.contains('fixElement')) {
            lightOffCells(listOFlementLightRows[i]);
        } else {
            break;
        }
    }
}

export function lightOffCells(cellElement) {

    let columnIndexNumber = cellElement.cellIndex;
    let rowIndexNumber = cellElement.parentNode.rowIndex;
    tableArray[rowIndexNumber][columnIndexNumber]--;
    generateLightInCorrectFiled(cellElement);
}

export let numberDelay = 0.1;

export function generateLightInCorrectFiled(cellElement) {

    if (tableArray[cellElement.parentNode.rowIndex][cellElement.cellIndex] > 0) {
        cellElement.classList.add('lightElement')
        cellElement.style.transitionDelay = `${numberDelay}s`;
        numberDelay = numberDelay + 0.1;
    } else {
        numberDelay = 0;
        cellElement.classList.remove('lightElement');
        cellElement.style.transitionDelay = `${numberDelay}s`;

    }
}





//Idáig tart a sor-oszlop fényerő-szabályzás




//Győzelmi feltételek ellenőrzése
export function checkTwoBubleInOneSector() {
    let elem;
    for (elem of cellAll) {
        if (tableArray[elem.parentNode.rowIndex][elem.cellIndex] !== 1 && elem.classList.contains('bulbIsOnTheCell')) {
            elem.classList.add('redLightElement');
        }
    }
    for (elem of cellAll) {
        if ((elem.classList.contains('zero') || (elem.classList.contains('null')) && elem.classList.contains('fixElement')) || (elem.classList.contains('lightElement') && !(elem.classList.contains('redLightElement')))) {
        } else {
            return false;
        }
    }
    return true;
}

export function winOrNotCheck() {
    if (checkTwoBubleInOneSector() === true) {
        endResult.innerText = 'Gratulálunk! Nyertél!'
        start();
    } else {
        endResult.innerText = 'Ezen még van hol finomítani...'
    }

}

export function checkRedLightElementAfterRemoveBulb() {
    let elem;
    for (elem of cellAll) {
        if (tableArray[elem.parentNode.rowIndex][elem.cellIndex] === 1 && elem.classList.contains('bulbIsOnTheCell')) {
            elem.classList.remove('redLightElement');
        }
    }
}
//Győzelmi feltételek ellenőrzésének vége.


//Ez a szakasz a fekete számlálókra vonatkozik!
export function blackCounterIsNull() {
    let elem;
    for (elem of allFixElement) {
        if (elem.innerText === '0') {
            elem.classList.remove('moreOrLess');
            elem.classList.add('zero');
        } else if (elem.innerText !== '0') {
            elem.classList.remove('zero');
            elem.classList.add('moreOrLess');
        }
    }
}

export function countOfBlackFileds(cella) {
    if (chooseTheTable === 1 || chooseTheTable === 2) {
        temporaryNumberOfRowIndex = 6;
    } else if (chooseTheTable === 3) {
        temporaryNumberOfRowIndex = 9;
    }
    if ((cella.parentNode.rowIndex !== temporaryNumberOfRowIndex && cella.parentNode.rowIndex !== 0) && cella.classList.contains('bulbIsOnTheCell')) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex + 1][cella.cellIndex] < 0) {
            let cellaId = parseInt(cella.id) + (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex - 1][cella.cellIndex] < 0) {
            let cellaId = parseInt(cella.id) - (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
    } else if ((cella.parentNode.rowIndex !== temporaryNumberOfRowIndex && cella.parentNode.rowIndex !== 0) && !(cella.classList.contains('bulbIsOnTheCell'))) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex + 1][cella.cellIndex] < 0 && cella.parentNode.rowIndex !== temporaryNumberOfRowIndex) {
            let cellaId = parseInt(cella.id) + (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex - 1][cella.cellIndex] < 0 && cella.parentNode.rowIndex !== 0) {
            let cellaId = parseInt(cella.id) - (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
    } else if (cella.parentNode.rowIndex === 0 && cella.classList.contains('bulbIsOnTheCell')) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex + 1][cella.cellIndex] < 0) {
            let cellaId = parseInt(cella.id) + (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
    } else if (cella.parentNode.rowIndex === 0 && !(cella.classList.contains('bulbIsOnTheCell'))) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex + 1][cella.cellIndex] < 0) {
            let cellaId = parseInt(cella.id) + (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
    } else if (cella.parentNode.rowIndex === temporaryNumberOfRowIndex && cella.classList.contains('bulbIsOnTheCell')) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0 && cella.classList.contains('bulbIsOnTheCell')) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0 && cella.classList.contains('bulbIsOnTheCell')) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
        if (tableArray[cella.parentNode.rowIndex - 1][cella.cellIndex] < 0 && cella.classList.contains('bulbIsOnTheCell')) {
            let cellaId = parseInt(cella.id) - (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) + 1;
        }
    } else if (cella.parentNode.rowIndex === temporaryNumberOfRowIndex && !(cella.classList.contains('bulbIsOnTheCell'))) {
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex + 1] < 0) {
            let cellaId = parseInt(cella.id) + 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex][cella.cellIndex - 1] < 0) {
            let cellaId = parseInt(cella.id) - 1;
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
        if (tableArray[cella.parentNode.rowIndex - 1][cella.cellIndex] < 0) {
            let cellaId = parseInt(cella.id) - (temporaryNumberOfRowIndex + 1);
            let beforeCell = document.getElementById(`${cellaId}`);
            beforeCell.innerText = parseInt(beforeCell.innerText) - 1;
        }
    }
}
//Fekete számlálókra vonatkozó szakasz vége