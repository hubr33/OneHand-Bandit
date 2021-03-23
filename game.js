const button = document.querySelector('.play');
const form = document.querySelector('.interface form');
const input = document.querySelector('input');

const gameSummary = {
    numbers: 0,
    wins: 0,
    draws: 0,
    losses: 0
}

const game = {
    square1: "",
    square2: "",
    square3: ""
}

let coins = 100;
let value;


const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const firstSquare = [...document.querySelectorAll('.color1 div')];
const secondSquare = [...document.querySelectorAll('.color2 div')];
const thirdSquare = [...document.querySelectorAll('.color3 div')];

function firstChoice() {
    const square1 = firstSquare[Math.floor(Math.random() * 3)].dataset.option;
    console.log(square1);
    if (square1 === "red") {
        color1.style.backgroundColor = "red";
    } else if (square1 === "green") {
        color1.style.backgroundColor = "green";
    } else {
        color1.style.backgroundColor = "blue";
    }
    return square1;
}

function secondChoice() {
    const square2 = secondSquare[Math.floor(Math.random() * 3)].dataset.option;
    if (square2 === "red") {
        color2.style.backgroundColor = "red";
    } else if (square2 === "green") {
        color2.style.backgroundColor = "green";
    } else {
        color2.style.backgroundColor = "blue";
    }
    console.log(square2);
    return square2;
}

function thirdChoice() {
    const square3 = thirdSquare[Math.floor(Math.random() * 3)].dataset.option;
    if (square3 === "red") {
        color3.style.backgroundColor = "red";
    } else if (square3 === "green") {
        color3.style.backgroundColor = "green";
    } else {
        color3.style.backgroundColor = "blue";
    }
    console.log(square3);
    return square3;
}

function checkResult(sq1, sq2, sq3) {
    if (sq1 === sq2 && sq1 === sq3 && sq2 === sq3) {
        console.log("WYGRANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        return "win";
    } else {
        console.log("przegrnaa")
        return "loss"
    }
}

const addValue = () => {
    value = input.value;
    console.log(Math.floor(value));
    return newVal = Number(value);
}
// let newVal = Math.floor(value);
// const newVV = () => {
// let numVal = new Number(value)
// return numVal


function showResult(result) {
    document.querySelector('.numbers span').textContent = ++gameSummary.numbers;
    if (result === "win") {
        document.querySelector('.win span').textContent = ++gameSummary.wins;
        document.querySelector('.result span').textContent = "Wygrałeś";
        document.querySelector('.result span').style.color = "green";
        coins = coins + newVal;
        document.querySelector('.amount span').textContent = coins;
    } else if (result === "loss") {
        document.querySelector('.loss span').textContent = ++gameSummary.losses;
        document.querySelector('.result span').textContent = "Przegrałeś";
        document.querySelector('.result span').style.color = "red";
        coins = coins - newVal;
        document.querySelector('.amount span').textContent = coins;
    } else {
        document.querySelector('.draw span').textContent = ++gameSummary.draws
    }
}

function startGame(e) {
    e.preventDefault()
    game.square1 = firstChoice();
    game.square2 = secondChoice();
    game.square3 = thirdChoice();
    addValue();
    const gameResult = checkResult(game.square1, game.square2, game.square3)
    showResult(gameResult);
}

// form.addEventListener('submit', addValue);
button.addEventListener('click', startGame);