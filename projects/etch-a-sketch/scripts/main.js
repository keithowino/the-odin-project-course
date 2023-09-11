"use strict";

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

document.addEventListener('DOMContentLoaded', () => {
    grid(3);
});

function grid(size){
    const canvas = document.getElementById('grid-body');

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const divisions = size * size;

    for(let i = 0; i < divisions; i++){
        const division = document.createElement('div');
        division.style.backgroundColor = 'red';
        canvas.insertAdjacentElement('beforeend', division)
    };

};