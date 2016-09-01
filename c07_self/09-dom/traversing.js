/*
jQuery DOM 탐색
.find() : 현재 객체집합에서 셀렉터와 일치하는 요소들을 리턴
.closest() : 셀렉터와 일치하는 가장 근접한 상위요소를 리턴
.parent() : 현재 객체집합의 직계 부모 요소를 리턴
.parents() : 현재 객체집합의 모든 부모 요소를 리턴
.childer() : 현재 객체집합의 모든 자식 요소를 리턴
.siblings() : 현재 객체집합의 모든 이웃 요소를 리턴
.next() : 현재 요소의 다음 이웃 요소를 리턴
.nextAll() : 현재 요소의 다음 이웃 요소들을 모두 리턴
.prev() : 현재 요소의 이전 이웃 요소를 리턴
.prevAll() : 현재 요소의 이전 이웃 요소들을 모두 리턴 
*/
// 페이지가 로드되면 목록을 숨긴 후, 버튼을 누르면 노출
$(function () {
	var $h2 = $('h2');
	$('ul').hide();
	$h2.append('<a class="show">show</a>');

	$h2.on('click', function () {
		// <h2>의 이웃 요소들 중 <ul> 요소만 찾게 됨
		$h2.next('ul')
		.fadeIn(500)
		// <ul>의 자식 요소들 중 class="hot"인 요소만 찾게 됨
		.children('.hot')
		.addClass('complete');
	// <a> 요소를 찾아 사라지는 효과를 적용
	$h2.find('a').fadeOut();
	});
});