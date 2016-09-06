(function () {
	var form = document.getElementById('login');	// <form> 요소를 저장, 이벤트 리스너 등록할 때 사용 

	addEvent(form, 'submit', function (e) {
		e.preventDefault();
		var elements = this.elements;
		var username = elements.username.value;
		var msg = '환영합니다 ' + username + '님!';
		document.getElementById('main').textContent = msg;
	});
// 즉시 호출 함수 표현식(IIFF), 마지막 괄호 잊지말자!
}());