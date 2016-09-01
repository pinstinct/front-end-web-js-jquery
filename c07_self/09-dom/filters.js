/*
jQuery 객체 집합에 요소 추가
.add() : 선택된 요소들을 기존 객체 집합에 추가

.filter() : 두 번째 셀렉터와 일치하는 요소들을 찾아 리턴
.find() : 셀렉터와 일치하는 하위 요소들을 찾아 리턴
.not() / :not() : 셀렉터와 일치하지 않는 요소들을 리턴
.has() / :has() : 셀렉터와 일치하는 하위 요소들을 가지고 있는 요소들을 리턴
.contains() : 지정한 텍스트를 가진 모든 요소를 리턴(대소문자 구분)
.is() : 현재 객체집합이 지정된 조건이 일치하는지를 검사(불리언 리턴)

동일한 결과를 리턴
$('li').not('hot').addClass('cool');
$('li:not(.hot)').addClass('cool');
*/
$(function () {
	var $listItems = $('li');

	$listItems.filter('.hot:last').removeClass('hot');
	$('li:not(.hot)').addClass('cool');
	$listItems.has('em').addClass('complete');

	$listItems.each(function () {
		var $this = $(this);
		if ($this.is('.hot')) {
			$this.prepend('Priority item: ');
		}
	});

	$('li:contains("honey")').append(' (local)');
});