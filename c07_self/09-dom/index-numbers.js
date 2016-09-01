/*
jQuery 객체는 배열과 유사한 객체로 취급한다.

.eq() : 인덱스 번호에 해당하는 요소를 리턴 
:lt() : 지정된 숫자보다 인덱스 번호가 작은 요소들을 리턴
:gt() : 지정된 숫자보다 인덱스 번호가 큰 요소들을 리턴
*/
$(function () {
	$('li:lt(2)').removeClass('hot');
	$('li').eq(0).addClass('complete');
	$('li:gt(2)').addClass('cool');
});