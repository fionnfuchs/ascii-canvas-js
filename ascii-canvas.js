var fsize = 15;

var canvaswidth = 640;
var canvasheight = 480;

var asciimap = {
	width: Math.floor(canvaswidth/fsize),
	height: Math.floor(canvasheight/fsize) - 1,
	map: [[]],

  put: function(char, x, y) {
      this.map[[x, y]] = char;
  },

  get: function(x,y) {
    return this.map[[x, y]];
  },

	init: function() {
		for (var x = 0; x <= this.width; x++) {
			for (var y = 0; y <= this.height; y++) {
				this.map[[x, y]] = null;
			}
		}
	}
};

window.onload = function() {
	c = document.getElementById('ascii-canvas');
	cc = c.getContext('2d');

	init();
	setInterval(update, 1000/60);
};

function init() {
  asciimap.init();
}

function update() {
	render();
}

function render() {
	cc.fillStyle = 'black';
	cc.fillRect(0, 0, c.width, c.height);

  asciimap.put('_', 5, 10)
  renderMap(asciimap);
}

function renderMap(map) {
  cc.font = "15px Courier New monospace";
  cc.fillStyle = 'white';
  for(var y = 0; y <= map.height; y++) {
    for(var x = 0; x <= map.width; x++) {
      if(map.map[[x, y]] != null) {
        cc.fillText(map.map[[x, y]], x*fsize + 5, y*fsize + 10);
      }
    }
  }
}
