// "use strict";

const appName = "etch a sketch";

document.title = appName.toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;

/*

TODO:   PSEUDOCODE
    *:  Create a webpage with a ${size}x${size} grid of square divs.

*/ 

$(function() {
    $("form").submit(function() { return false; });
});

let color = 'black';
const click = false;

const input = document.querySelector('.js-dimension');
const inputDimensionsElement = document.querySelector('.js-submit-dimensions');
const BotResponseElement = document.querySelector('.js-bot-response');

const resetDivisionBgElement = document.querySelector('.js-reset-divisions-bg');

document.addEventListener('DOMContentLoaded', () => {
    inputDimensionsElement.addEventListener('click', dimensions);
    input.addEventListener('keydown', (e) => {
        if(e.code === 'Enter' || e.code === 'Space'){
            dimensions();
        };
    })

    // TODO:
    // document.querySelector('body').addEventListener('click', (e) => {
    //     if(e.target.tagName !== 'BUTTON'){
    //         click = !click;
    //     };
    // })
});

function grid(size){
    const canvas = document.getElementById('grid-body');

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const divisions = size * size;

    for(let i = 0; i < divisions; i++){
        const division = document.createElement('div');
        division.setAttribute('class', 'pixel');
        division.addEventListener('mouseover', colorDivision)
        canvas.insertAdjacentElement('beforeend', division)
    };

};

function dimensions(){
    const dimension = parseInt(input.value);
    if(!dimension){
        BotResponseElement.innerHTML = 'Accurate dimension required';
    }else if(dimension < 1 || dimension > 100){
        BotResponseElement.innerHTML = 'Dimension out of range';
    }else{
        BotResponseElement.innerHTML = 'Lets Draw!';
        grid(dimension);
        resetDivisionBg();
    };
};

const defaultColorElement = document.querySelector('.js-color-black')
const randomColorElement = document.querySelector('.js-color-random');

defaultColorElement.addEventListener('click', () => {
    setColor('black');
});

randomColorElement.addEventListener('click', () => {
    setColor('random');
});

function setColor(colorChoice){
    color = colorChoice;
};

function colorDivision(){
    // TODO: 
    // if(click){
    //     if(color === 'random'){
    //         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    //     }else{
    //         this.style.backgroundColor = 'black';
    //     };
    // };

    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else{
        this.style.backgroundColor = 'black';
    };
};

resetDivisionBgElement.addEventListener('click', resetDivisionBg)

function resetDivisionBg(){
    const divisions = document.querySelectorAll('.pixel');
    divisions.forEach((item) => {
        item.style.backgroundColor = '#fff';
    })
};