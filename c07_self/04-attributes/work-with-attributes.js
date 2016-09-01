/*
.attr() : 특성과 그 값을 리턴 
.removeAttr() : 특성과 그 값을 제거
.addClass() : class특성에 새로운 값을 추가
.removeClass() : class특성에서 값을 제거
*/
$(function () {
	$('li#three').removeClass('hot');

	// 기존의 값을 덮어쓰지 않음
	$('li.hot').addClass('favorite');
	
	// 존재하지 않는 특성에 대해 이용하면 새로운 특성이 생성
	$('ul').attr('id', 'group');
});