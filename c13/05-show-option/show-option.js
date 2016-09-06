/*
사용자가 라디오 버튼을 선택할 때마다 
사용자가 "기타" 항목을 선택했는지 확인하여
아래 두 가지 작업 중 한 가지를 수행한다.
- '기타' 항목을 선택했으면 상세 정보를 입력할 수 있는 텍스트 상자를 노출
- 처음 두 개 항목 중 하나를 선택했으면 텍스트 상자를 숨기고 그 값에 빈 문자열 설정 
*/
(function () {
	var form, options, other, otherText, hide;
	form = document.getElementById('how-heard');
	options = form.elements.heard;
	other = document.getElementById('other');
	otherText = document.getElementById('other-text');
	otherText.className = 'hide';

	for (var i = 0; i < options.length; i++) {
		addEvent(options[i], 'click', radioChanged);
	}

	function radioChanged() {
		// 기타 옵션이 체크되었으면
		// hide 값을 빈문자열 지정 > 텍스트 상자 노출 
		// 그렇지 않으면 hide라는 값을 지정 > 텍스트 상자 숨김
		hide = other.checked ? '' : 'hide';
		otherText.className = hide;
		if (hide) {	// 빈 문자열은 false로 취급 
			otherText.value = '';
		}
	}
}());