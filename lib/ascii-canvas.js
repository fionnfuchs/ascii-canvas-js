var fsize = 15;

var canvaswidth = 800;
var canvasheight = 600;

export var asciimap = {
	width: Math.floor(canvaswidth/(fsize*0.75)) - 2,
	height: Math.floor(canvasheight/(fsize*1.2)) - 1,
	map: [[]],

  put: function(char, x, y, color, bgcolor) {
    var c = "#FFFFFF";
    if(color)c=color;
    this.map[[x, y]] = {char: char, color:c, bgcolor:bgcolor};
  },

  putRect: function(char, x, y, w, h, color, bgcolor) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _x = 0; _x < w; _x++) {
      for(var _y = 0; _y < h; _y++) {
        this.map[[x + _x, y + _y]] = {char: char, color:c, bgcolor:bgcolor};
      }
    }
  },

  putHString: function(string, x, y, color, bgcolor) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _x = 0; _x <= string.length; _x++) {
      this.map[[x + _x, y]] = {char: string.charAt(_x), color:c, bgcolor:bgcolor};
    }
  },

  putVString: function(string, x, y, color, bgcolor) {
    var c = "#FFFFFF";
    if(color)c=color;
    for(var _y = 0; _y <= string.length; _y++) {
      this.map[[x, y + _y]] = {char: string.charAt(_y), color:c, bgcolor:bgcolor};
    }
  },

  get: function(x,y) {
    return this.map[[x, y]];
  },

	init: function() {
		for (var x = 0; x <= this.width; x++) {
			for (var y = 0; y <= this.height; y++) {
				this.map[[x, y]] = {char: null, color: "#000000", bgcolor: "#000000"};
			}
		}
	},

  clear: function() {
    for (var x = 0; x <= this.width; x++) {
			for (var y = 0; y <= this.height; y++) {
				this.map[[x, y]] = {char: null, color: "#000000", bgcolor: "#000000"};
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

  drawObject: function(object,x,y,color,bgcolor) {
    var _y = 0;
    var _x = 0;
    for(var i = 0; i <= object.length; i++) {
      if(object.charAt(i) != '\n') {
        asciimap.put(object.charAt(i), x + _x, y + _y, color, bgcolor);
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
				if(this.map.map[[x, y]].bgcolor != null && this.map.map[[x, y]].bgcolor != "#000000") {
					this.cc.fillStyle = this.map.map[[x, y]].bgcolor;
					this.cc.fillRect(x*fsize*0.75, y*fsize*1.2, fsize, fsize);
				}
			}
		}
    for(var y = 0; y <= this.map.height; y++) {
      for(var x = 0; x <= this.map.width; x++) {
        if(this.map.map[[x, y]].char != null) {
          this.cc.fillStyle = this.map.map[[x, y]].color;
          this.cc.fillText(this.map.map[[x, y]].char, x*fsize*0.75 + 5 + 3, y*fsize*1.2 + 10 + 3);
        }
      }
    }
  }
}
