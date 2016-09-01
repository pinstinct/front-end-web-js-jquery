/*
.remove() : DOM 트리에서 조건이 일치하는 요소들을 제거(하위요소 모두 제거)
.detach() : .remove 메서드와 동일하지만 복사본을 메모리에 남겨둔다.
.empty() : 일치하는 모든 요소 및 하위요소와 자식 노드들을 제거
.unwrap() :일치하는 요소들의 부모 요소들을 제거하며, 일치하는 요소들은 남겨둔다.
.clone() : 객체집합의 복사본을 생성한다.
*/

$(function () {
	// <p> 요소 위치 이동
	var $p = $('p');
	var $clonedQuote = $p.clone();
	$p.remove();
	$clonedQuote.insertAfter('h2');

	var $moveItem = $('#one').detach();
	$moveItem.appendTo('ul');
});