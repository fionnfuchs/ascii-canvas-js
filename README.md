# ascii-canvas.js

*Very early in development!*

This is a javascript framework for drawing monospace ascii on a canvas. In the future functionality for game development is planned.

### Take a look
You can see a small demo of functionality at **https://fionnfuchs.github.io/ascii-canvas-js/**

### Features
- Draw single characters on grid
- Draw boxes of characters on grid
- Draw horizontal and vertical strings on grid
- Draw from file (e.g. .txt) source

All functionality is contained in ascii-canvas.js and pretty self explanatory.  

### Tutorial
You can use ```main.js``` as a starting point. Use ```drawObject(obj,x,y,color)``` from the ```renderer``` to draw any string at position (x,y). Objects that have multiple lines can be drawn by just placing \n in the string. Then it will go to the next line (y) and to the first x relatively.  
