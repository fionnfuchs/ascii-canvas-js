window.onload = function() {
	c = document.getElementById('ascii-canvas');
	cc = c.getContext('2d');

	init();
	setInterval(update, 1000/60);
};

function init() {

}

function update() {
	render();
}

function render() {
	cc.fillStyle = 'black';
	cc.fillRect(0, 0, c.width, c.height);
}
