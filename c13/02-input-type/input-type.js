/*
체크박스를 선택하면,
<input> 요소의 type 특성 값을 password에서 text로 변경 

IE8및 그 이전 버전에서는 type 속성 값을 변경하면 오류가 발생한다.
따라서 try ... catch 구문을 이용한다.
*/

(function () {
	var pwd = document.getElementById('pwd');
	var chk = document.getElementById('showPwd');

	// 사용자가 체크박스를 클릭할 때 이벤트 리스너를 통해 익명함수 호출
	addEvent(chk, 'change', function (e) {
		var target = e.target || e.srcElement;
		try {
			if (target.checked) {
				pwd.type = 'text';
			} else {
				pwd.type = 'password';
			}
		} catch (error) {
			alert('이 브라우저는 입력의 종류를 변경할 수 없습니다.');
		}
	});
}());