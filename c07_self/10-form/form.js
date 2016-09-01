/*
jQuery는 폼작업에 특화된 셀렉터들을 제공한다.
그러나 이를 이용하는 방법이 가장 빠르게 동작하지는 않는다.
그러므로 탐색의 대상이 될 요소들의 범위를 좁힌 후 사용해야 한다.

jQuery가 브라우저마다 다르게 처리하는 공백을 알아서 처리하기 때문에 순수한 자바스크립트를 이용하는 것보다는 jQuery를 이용하여 폼 요소를 탐색하는 것이 훨씬 쉽다.

<폼 요소 셀렉터>
:button : <button> 및 type 특성 값이 button인 <input> 요소들을 리턴
:checkbox : type 특성 값이 checkebox인 <input> 요소들을 리턴한다. $('type="checkbox"')가 더 나은 성능 제공한다.
:checked : 체크박스 및 라디오 버튼들 중 체크된 요소들을 리턴 
:disabled : 비활성화된 모든 요소를 리턴
:enabled : 활성화된 모든 요소를 리턴
:focus : 현재 포커스를 가진 요소를 리턴한다. $(document.activeElement)가 더 나음
:file : 모든 파일 입력 요소들을 리턴
:image : 모든 이미지 요소들을 리턴한다. [type="image"]가 더 나음.
:input : 모든 <button>,<input>,<select>,<textarea> 요소들을 리턴한다. .filter(":input")이 더 나음
:password : 모든 비밀번호 입력 요소들을 가져온다. $('input:password')가 더 나음
:radio : 모든 라디오 입력요소들을 가져온다. $('input[name="gender"]:radio')와 같이 이용
:reset : 모든 리셋 버튼 요소들을 리턴
:selected : 선택된 모든 요소들을 가져온다. .filter(":selected")가 더 나음
:submit : <button> 및 type 특성 값이 submit인 <input> 요소들을 가져온다. [type="submit"]이 더 나음
:text : type 특성 값이 text이거나 특성 값이 존재하지 않는 모든 <input>요소들을 가져온다. ('input:text')가 더 나음

요소의 값 조회
.val() : <input>, <select>, <textarea> 요소에 주로 사용한다. 객체집합 내 첫 번째 요소의 값을 가져오거나 모든 요소들의 값을 수정할 때 사용한다.
*/
$(function () {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');

	$newItemButton.show();
	$newItemForm.hide();

	$('#showForm').on('click', function () {
		$newItemButton.hide();
		$newItemForm.show();
	});

	$newItemForm.on('submit', function (e) {
		e.preventDefault();
		var newText = $('input:text').val();
		$('li:last').after('<li>' + newText + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});;






