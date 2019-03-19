import { renderer } from './lib/ascii-canvas.js';
import { asciimap } from './lib/ascii-canvas.js';

window.onload = function() {
    init();

	setInterval(draw, 1000/20);
};

function init() {
    renderer.init();
}

function draw() {
    renderer.drawObject("Test",1,1);
    renderer.render();
}