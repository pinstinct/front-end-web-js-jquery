/*
요소 삽입
1. jQuery 객체에 새로운 요소를 생성
2. 페이지에 콘텐츠를 삽입하는 메서드를 호출
(XSS 주의)

.before() : 선택된 요소 전에 삽입
.after() : 선택된 요소 다음에 삽입
.prepend() : 선택된 요소의 여는 태그 다음에 삽입
.append() : 선택된 요소의 닫는 태그 전에 삽입
*/
$(function () {
	// .before()
	$('ul').before('<p class="notice">Just updated</p>');
	// .prepend()
	$('li.hot').prepend('+ ');
	// .after()
	var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
	$('li:last').after($newListItem);
})