//  h1~h6 태그에 class="headline" 추가
$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
// li 요소에 이벤트 리스너를 바인딩
$('li').on('click', function () {
	$(this).remove();
});