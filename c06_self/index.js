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