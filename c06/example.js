// 1. 변수 설정
var elNoteInput = document.getElementById('noteInput');
var elNoteName = document.getElementById('noteName');
var target, title;

// 3. 함수 구현
function writeLabel(e) {
	// for IE
	if (!e) {
		e = window.event;
	}
	target = e.target || e.srcElement;
	title = target.value;
	elNoteName.textContent = title;
}

function recorderControls(e) {
	// for IE
	if (!e) {
		e = window.event;
	}
	target = e.target || e.srcElement;

	//
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		// for IE
		e.returnValue = false;
	}
	
	switch (target.getAttribute('data-state')){
		case 'record':
			record(target);
			break;
		case 'stop':
			stop(target);
			break;	
	}
}

function record(target) {
	target.setAttribute('data-state', 'stop');
	terget.textContent = 'stop';
}
function stop(target) {
	target.setAttribute('data-state', 'record');
	terget.textContent = 'record';
}

// 2. 리스너 설정
if (document.addEventListener) {
	document.addEventListener('click', function (e) {
		recorderControls(e);
	}, false);
	elNoteInput.addEventListener('input', writeLabel, false);
} else {
	// for IE
	document.attachEvent('onclick', function (e) {
		recorderControls(e);
	});
	elNoteInput.attachEvent('onkeyup', writeLabel);
}



