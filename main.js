import { renderer } from './lib/ascii-canvas.js';
import { asciimap } from './lib/ascii-canvas.js';
import { readTextFile } from './lib/utils.js';

var x = 0;
var owl;

window.onload = function() {
    init();
	setInterval(draw, 1000/20);
};

function init() {
    renderer.init();
    readTextFile("./ascii/owl.txt", function(string) {
        owl = string;
    })
}

function draw() {
    x = (x+1)%100;
    renderer.drawObject(owl, 2, 2);
    renderer.drawObject("- Hello, I'm Mr. Owl.\n  This is the ascii-canvas.js library.\n  Have Fun!", 9, 3);
    renderer.render();
}