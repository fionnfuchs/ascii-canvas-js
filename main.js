import { renderer } from './lib/ascii-canvas.js';
import { asciimap } from './lib/ascii-canvas.js';
import { readTextFile } from './lib/utils.js';
import { mouse } from './lib/mouse.js';

var owl;
var canvas;

var movx = 0;

window.onload = function() {
    init();
    setInterval(draw, 1000/20);
    canvas = document.getElementById('ascii-canvas');
    mouse.init(canvas);
};

function init() {
    renderer.init(); //Creating the ASCII Canvas: Default size: 69*32 symbols - it is not advised to change size at this stage
    readTextFile("./ascii/owl.txt", function(string) {
        owl = string;
    })
}

function draw() {
    renderer.drawObject(owl, 2, 2);
    renderer.drawObject("- Hello, I'm Mr. Owl.\n  This is the ascii-canvas.js library.\n  Have Fun!", 9, 3);
    renderer.drawObject("  Mouse position:\n  X: " + mouse.getMousePos().x + "\n  Y: " + mouse.getMousePos().y + "\n", 9, 7, "#999999", "#222222");
    renderer.drawObject("Background colors!\n", 11, 11, "#EEEEEE", "#D64161");
    renderer.drawObject("Movement!\n", 11, 13, "#EEEEEE", "#6B5B95");
    renderer.drawObject("@", 11 + movx, 14, "#EEEEEE", "#6B5B95");
    movx = (movx+1)%18;
    renderer.render();
}
