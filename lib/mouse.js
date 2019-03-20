var canvas;

var mousePos = {
    x: 0,
    y: 0
}

export var mouse = {
    init: function(c) {
        canvas = c;
        canvas.addEventListener("mousemove", this.mouseMove);
    },
    mouseMove: function(evt) {
        var rect = canvas.getBoundingClientRect();
        mousePos = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    },
    getMousePos: function() {
        return mousePos;
    }
};