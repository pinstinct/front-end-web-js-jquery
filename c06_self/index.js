// /* @lim, event-attributes.js */
// function checkUsername() {
// 	var elUserName = document.getElementById('username');
// 	var elMsg = document.getElementById('feedback');

// 	if (elUserName.value.length < 5) {
// 		elMsg.textContent = '이름은 다섯 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }


// /* @lim, event-handler.js */
// function checkUsername() {
// 	var elMsg = document.getElementById('feedback');
// 	if (this.value.length < 5) {
// 		elMsg.textContent = '이름은 다섯 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }

// var elUserName = document.getElementById('username');
// elUserName.onblur = checkUsername;


// /* @lim, event-listener.js */
// function checkUsername() {
// 	var elMsg = document.getElementById('feedback');
// 	if (this.value.length < 5) {
// 		elMsg.textContent = '이름은 다섯 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }

// var elUserName = document.getElementById('username');
// elUserName.addEventListener('blur', checkUsername, false);


// /* @lim, event-listener-with-parameter.js */
// var elUserName = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// function checkUsername(minLength) {
// 	if (elUserName.value.length < minLength) {
// 		elMsg.textContent = '이름은' +  minLength + ' 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }

// elUserName.addEventListener('blur', function () {
// 	checkUsername(5);
// }, false);


// /* @lim, event-listener-with-ie-fallback.js */
// var elUserName = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// function checkUsername(minLength) {
// 	if (elUserName.value.length < minLength) {
// 		elMsg.textContent = '이름은' +  minLength + ' 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }

// if (elUserName.addEventListener) {
// 	elUserName.addEventListener('blur', function () {
// 	checkUsername(5);
// 	}, false);
// } else {
// 	elUserName.attachEvent('onblur', function(){
// 		checkUsername(5)
// 	});
// }


// /* @lim, event-listner-with-event- object.js */
// function checkLength(e, minLength) {
// 	var el, elMsg;
// 	if (!e) {
// 		// for IE
// 		e = window.event;
// 	}
// 	// 이벤트가 발생한 요소
// 	el = e.target || e.srcElement;	// 이벤트요소||이벤트요소(FOR IE!)
// 	elMsg = el.nextSibling;

// 	if (el.value.length < minLength) {
// 		elMsg.innerHTML = '이름은' +  minLength + ' 글자 이상이어야 합니다.';
// 	} else {
// 		elMsg.innerHTML = '';
// 	}
// }

// var elUserName = document.getElementById('username');
// if (elUserName.addEventListener) {
// 	// 이벤트 리스너를 지원할 경우
// 	elUserName.addEventListener('blur', function (e) {
// 		checkLength(e, 5);
// 	}, false);
// } else {
// 	// for IE!
// 	elUserName.attachEvent('onblur', function (e) {
// 		checkLength(e, 5);
// 	});
// }


// /* @lim, load.js */
// function setup() {
// 	var textInput;
// 	textInput = document.getElementById('username');
// 	textInput.focus();
// }

// window.addEventListener('load', setup, false);


// /* @lim, focus-blur.js */
// function tipUsername() {
// 	elMsg.className = 'tip';
// 	elMsg.innerHTML = '이름은 다섯 글자 이상이어야 합니다.';	
// }

// function checkUsername() {
// 	var username = el.value;
// 	if (username.length < 5) {
// 		elMsg.className = 'warning';
// 		elMsg.innerHTML = '이름이 너무 짧습니다.';
// 	} else {
// 		elMsg.textContext = '';
// 	}
// }


// // username 입력 필드가 포커스를 얻거나 받을 때 함수 호출
// var el = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// el.addEventListener('focus', tipUsername, false);
// el.addEventListener('blur', checkUsername, false);


/* @lim, click.js*/
var msg = '<div class=\"header\"><a id=\"close\" href="#">닫기 X</a></div>';
msg += '<div class=\"message\"><h2>정기 정검 중입니다</h2>';
msg += '오전 3~4시 사이에 서비스 정검이 있습니다.';
msg += '이 시간 동안에는 서비스 이용이 불가능합니다.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;

document.body.appendChild(elNote);

function dismissNote(){
	document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);





