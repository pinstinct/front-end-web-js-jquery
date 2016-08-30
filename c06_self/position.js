var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPostion(e) {
	sx.value = e.screenX;
	sy.value = e.screenY;
	px.value = e.pageX;
	py.value = e.pageY;
	cx.value = e.clientX;
	cy.value = e.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPostion, false);