"use strict";

const appName = "web awesome";

document.title = appName.toUpperCase();

const siteTileRefElement = document.querySelector(".js-site-title-ref");

siteTileRefElement.innerHTML = appName;