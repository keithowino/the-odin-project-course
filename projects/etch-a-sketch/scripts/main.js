"use strict";

const appName = "etch a sketch";

document.title = appName.toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;

/*

TODO:   PSEUDOCODE
    *:  Create a webpage with a 16x16 grid of square divs.

*/ 

const gridElement = document.querySelector('.grid-container');

function makeRows(rows, columns){
    gridElement.style.setProperty()
};

makeRows(16, 16);