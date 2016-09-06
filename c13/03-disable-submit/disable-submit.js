/*
다음 두 가지의 상황이 발생하면 전송 버튼을 비활성화
1. 스크립트가 처음 로드되는 경우
2. 폼이 전송된 경우 (그래서 폼이 여러 번 전송되지 않도록 한다.)

버튼은 disabled 속성을 이용해 비활성화한다.
- true : 요소 비활성화
- false : 요소 활성화
*/
(function () {
	var form = document.getElementById('newPwd');
	var password = document.getElementById('pwd');
	var submit = document.getElementById('submit');

	// submitted 변수는 일종의 플래그(flag) 역할
	var submitted = false;

	// 전송 버튼은 (HTML이 아니라) 스크립트가 처음 로드될 때 비활성화
	submit.disabled = true;
	submit.className = 'disabled';

	addEvent(password, 'input', function (e) {
		var target = e.target || e.srcElement;

		// 비밀번호를 입력했을 경우
		// submitted = false;
		// target.value = '사용자 입력 값'; 
		// 내용을 가진 문자열은 true 반환
		// !('text') = false;
		submit.disabled = submitted || !target.value;	// submit.disabled = false;
		// 조건이 true이면 'disabled'
		// false면, 'enabled'
		submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';	// submit.className = 'enabled';
	});

	// 전송 버튼이 비활성화되어 있거나 폼이 전송된 적이 있는가?
	addEvent(form, 'submit', function (e) {
		// 폼 전송을 취소
		if (submit.disabled || submitted) {
			e.preventDefault();
			return;
		}
		// 폼 전송 후 
		submit.disabled = true;	// 폼을 비활성화 
		submitted = true;	// flag 값 수정
		submit.className = 'disabled'

		e.preventDefault();
		alert('비밀번호: ' + password.value);
	});

}());