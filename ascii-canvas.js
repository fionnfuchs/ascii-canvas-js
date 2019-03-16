var fsize = 15;

var canvaswidth = 635;
var canvasheight = 475;

var testx = 0;

var testobject = ""; // <-- test for file reading

var asciimap = {
	width: Math.floor(canvaswidth/fsize*0.9),
	height: Math.floor(canvasheight/fsize*1.2) - 1,
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
	},

  clear: function() {
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
	setInterval(render, 1000/20);
};

function init() {
  //Now files can be read to display objects
  readTextFile("ascii-object.txt", function(value) {
    testobject = value;
  });

  asciimap.init();
}

function render() {
	cc.fillStyle = 'black';
	cc.fillRect(0, 0, c.width, c.height);

  // Draw some letters
  asciimap.put('A', 4 + testx, 4);
  asciimap.put('B', 5 + testx, 5);
  asciimap.put('C', 6 + testx, 4);

  // Move letters
  testx += 1;

  // Draw horizontal strings
  asciimap.putHString("This is the ASCII canvas!", 0, 0);
  asciimap.putHString("Box:", 10, 2);

  // Draw a box of squares
  asciimap.putRect(String.fromCharCode(parseInt(2588,16)), 10, 4, 5, 5);

  asciimap.putVString("Vertical string!", 1, 2);

  // Display object with string source for example from a file
  drawObject(testobject, 10, 20);

  renderMap(asciimap);
  asciimap.clear();
}

function drawObject(object, x, y) {
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
}

function renderMap(map) {
  cc.font = "15px Courier New";
  cc.fillStyle = 'white';
  for(var y = 0; y <= map.height; y++) {
    for(var x = 0; x <= map.width; x++) {
      if(map.map[[x, y]] != null) {
        cc.fillText(map.map[[x, y]], x*fsize*0.9 + 5 + 3, y*fsize*1.2 + 10 + 3);
      }
    }
  }
}

function readTextFile(file, done)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              var allText = rawFile.responseText;
              done(allText);
          }
      }
  }
  rawFile.send(null);
}
