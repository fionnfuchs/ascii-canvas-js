var fsize = 15;

var canvaswidth = 635;
var canvasheight = 475;

var asciimap = {
	width: Math.floor(canvaswidth/fsize),
	height: Math.floor(canvasheight/fsize) - 1,
	map: [[]],

  put: function(char, x, y) {
      this.map[[x, y]] = char;
  },

  putRect: function(char, x, y, w, h) {
    for(var _x = 0; _x < w; _x++) {
      for(var _y = 0; _y < h; _y++) {
        this.map[[x + _x, y + _y]] = char;
      }
    }
  },

  putHString: function(string, x, y) {
    for(var _x = 0; _x <= string.length; _x++) {
      this.map[[x + _x, y]] = string.charAt(_x);
    }
  },

  putVString: function(string, x, y) {
    for(var _y = 0; _y <= string.length; _y++) {
      this.map[[x, y + _y]] = string.charAt(_y);
    }
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

  asciimap.put('A', 4, 4);
  asciimap.put('B', 5, 5);
  asciimap.put('C', 6, 4);

  asciimap.putHString("This is the ASCII canvas!", 0, 0);
  asciimap.putHString("Box:", 10, 2);
  asciimap.putRect(String.fromCharCode(parseInt(2588,16)), 10, 4, 5, 5);

  asciimap.putVString("Vertical string!", 1, 2);
  renderMap(asciimap);
}

function renderMap(map) {
  cc.font = "15px Courier New monospace";
  cc.fillStyle = 'white';
  for(var y = 0; y <= map.height; y++) {
    for(var x = 0; x <= map.width; x++) {
      if(map.map[[x, y]] != null) {
        cc.fillText(map.map[[x, y]], x*fsize + 5 + 2, y*fsize + 10 + 2);
      }
    }
  }
}
