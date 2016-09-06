/*
두 개의 이벤트 핸들러를 가지고 있다.
1. "모두 선택" 체크박스의 상태가 변경될 때 발생
	- 나머지 모든 체크박스에 체크 표시를 한다.
2. 개별 체크박스의 상태가 변경될 때
	- 어느 한 체크박스의 체크를 해제하면 모두 선택 체크박스도 해제한다.화

체크박스, 라디오 버튼, 선택 상자의 값을 확인할 때는 change 이벤트 사용
*/
(function () {
	var form = document.getElementById('interests');
	var element = form.elements;
	var option = element.genre;
	var all = document.getElementById('all');

	function updateAll() {
		for (var i = 0; i < option.length; i++) {
			option[i].checked = all.checked;
			console.log(option[i].name);
		}
	}
	addEvent(all, 'change', updateAll);

	function clearAllOption(e) {
		var target = e.target;
		// 개별 체크박스를 클릭하면 
		if(!target.checked){
			all.checked = false;	// 모두 선택 체크박스를 해제 
		}
	}

	for (var i = 0; i < option.length; i++) {
		addEvent(option[i], 'change', clearAllOption);
	}
}());