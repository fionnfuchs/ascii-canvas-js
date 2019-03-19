var fsize = 15;

var canvaswidth = 635;
var canvasheight = 475;

export var asciimap = {
	width: Math.floor(canvaswidth/fsize*0.9),
	height: Math.floor(canvasheight/fsize*1.2) - 1,
	map: [[]],

  put: function(char, x, y, color) {
    var c = "#FFFFFF";
    if(color)c=color;
    this.map[[x, y]] = {char: char, color:c};
  },

  putRect: function(char, x, y, w, h, color) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _x = 0; _x < w; _x++) {
      for(var _y = 0; _y < h; _y++) {
        this.map[[x + _x, y + _y]] = {char: char, color:c};
      }
    }
  },

  putHString: function(string, x, y, color) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _x = 0; _x <= string.length; _x++) {
      this.map[[x + _x, y]] = {char: string.charAt(_x), color:c};
    }
  },

  putVString: function(string, x, y, color) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _y = 0; _y <= string.length; _y++) {
      this.map[[x, y + _y]] = {char: string.charAt(_y), color:c};
    }
  },

  get: function(x,y) {
    return this.map[[x, y]];
  },

	init: function() {
		for (var x = 0; x <= this.width; x++) {
			for (var y = 0; y <= this.height; y++) {
				this.map[[x, y]] = {char: null, color: "#000000"};
			}
		}
	},

  clear: function() {
    for (var x = 0; x <= this.width; x++) {
			for (var y = 0; y <= this.height; y++) {
				this.map[[x, y]] = {char: null, color: "#000000"};
			}
		}
  }
};

export var renderer = {
  c: null,
  cc: null,
  map: asciimap,
  init: function() {
    this.c = document.getElementById('ascii-canvas');
    this.cc = this.c.getContext('2d');
  
    asciimap.init();
  },

  render: function() {
    this.cc.fillStyle = 'black';
    this.cc.fillRect(0, 0, this.c.width, this.c.height);
    
    this.renderMap(asciimap);
    asciimap.clear();
  },

  drawObject: function(object,x,y) {
    var _y = 0;
    var _x = 0;
    for(var i = 0; i <= object.length; i++) {
      if(object.charAt(i) != '\n') {
        asciimap.put(object.charAt(i), x + _x, y + _y);
        _x++;
      } else {
        _x=0;
        _y++;
      }
    }
  },

  renderMap: function() {
    this.cc.font = "15px bold Courier New";
    for(var y = 0; y <= this.map.height; y++) {
      for(var x = 0; x <= this.map.width; x++) {
        if(this.map.map[[x, y]].char != null) {
          this.cc.fillStyle = this.map.map[[x, y]].color;
          this.cc.fillText(this.map.map[[x, y]].char, x*fsize*0.9 + 5 + 3, y*fsize*1.2 + 10 + 3);
        }
      }
    }
  }
}
