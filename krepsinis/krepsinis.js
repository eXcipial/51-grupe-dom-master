import { header } from '../js/header.js';
header('krepsinis');

const hScoreDOM = document.getElementById('h-score');
const gScoreDOM = document.getElementById('g-score');

let hScore = 0;
let gScore = 0;

function updateScore(displayElement, score) {
    displayElement.textContent = score;
}

// H komandos mygtukai
document.getElementById('h-plus1').addEventListener('click', function() {
    hScore += 1;
    updateScore(hScoreDOM, hScore);
});

document.getElementById('h-plus2').addEventListener('click', function() {
    hScore += 2;
    updateScore(hScoreDOM, hScore);
});

document.getElementById('h-plus3').addEventListener('click', function() {
    hScore += 3;
    updateScore(hScoreDOM, hScore);
});

// G komandos mygtukai
document.getElementById('g-plus1').addEventListener('click', function() {
    gScore += 1;
    updateScore(gScoreDOM, gScore);
});

document.getElementById('g-plus2').addEventListener('click', function() {
    gScore += 2;
    updateScore(gScoreDOM, gScore);
});

document.getElementById('g-plus3').addEventListener('click', function() {
    gScore += 3;
    updateScore(gScoreDOM, gScore);
});
