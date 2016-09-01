//  h1~h6 태그에 class="headline" 추가
$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
// li 요소에 이벤트 리스너를 바인딩
$('li').on('click', function () {
	$(this).remove();
});

// 변수에 캐싱
$listItems = $('li');

// looping.js
$('li.hot').addClass('favorite');

// chaining.js
$('li[id != "one"]').hide().delay(500).fadeIn(1400);

$(document).ready(function () {
	// body...
});

$(function () {
	// body...
})