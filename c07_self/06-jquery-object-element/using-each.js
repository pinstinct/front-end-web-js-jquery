/*
.each() : 객체집합 내 요소들에 대해 루프가 필요할 때 이용
this : 현재 작업의 대상이 된 요소를 this 키워드를 통해 얻을 수 있다.
$(this) : this 키워드를 jQuery 객체집함으로 만들어 사용하면, jQuery 메서드들을 사용할 수 있다.
*/
$(function () {
	// 매개변수로는 각 요소에 대해 실행하고자 하는 기능을 구현한 함수를 전달
	$('li').each(function () {
		// this 키워드는 현재의 노드를 참조하기 때문에 그 노드의 속성에 접근하고자 한다면,
		// 아래와 같이 순수한 자바스크립트 코드를 이용하는 것이 더 좋다.
		// ids = this.id;
		var ids = this.id;
		$(this).append(' <span class="order">' + ids + '</span>');
	});
});