var el;

function charCount(e) {
	var textEntered, charDisplay, counter, lastkey;

	textEntered = document.getElementById('message').value;
	charDisplay = document.getElementById('charactersLeft');
	counter = (180 - (textEntered.length));
	charDisplay.textContent = counter;

	lastkey = document.getElementById('lastKey');
	// event 객체의 keyCode 속성은 ASCII 코드 값을 리턴
	lastkey.textContent = '마지막 입력의 ASCII 코드: ' + e.keyCode;
}


el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);