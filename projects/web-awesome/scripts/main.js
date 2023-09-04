"use strict";

const appName = "web awesome";

document.title = appName.toUpperCase();

const titleElement = document.querySelector(".js-app-name");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;