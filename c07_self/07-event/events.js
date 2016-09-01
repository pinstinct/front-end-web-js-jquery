/*
.on() : 모든 이벤트를 처리할 수 있다.
내부적으로 크로스 브라우저 이슈들을 모두 고려한다.

jQuery 이벤트
UI : focus, blur, change
Keyboard : input, keydown, keyup, keypress
mouse : click, dbclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover
form : submit, select, change
document : ready, load, unload
browser : error, resize, scroll
*/
// 항목에 커서를 가져가면 <li> 요소 id 출력
$(function () {
	var ids = '';
	var $listItem = $('li');

	// on() 메서드는 두 개의 매개변수가 필요
	// on('대응할 이벤트', function)

	// 하나의 따옴표 내에 공백을 이용하여 두 개의 이벤트 지정
	$listItem.on('mouseover click', function () {
		ids = this.id;
		$listItem.children('span').remove();	// 모든 목록 아이템의 <span> 요소 제거 
		$(this).append(' <span class="priority">' + ids + '</span>');
	});

	$listItem.on('mouseout', function () {
		$(this).children('span').remove();
	});
});


/*
event 객체 : 발생한 이벤트와 관련된 메서드와 속성을 가지고 있다.

jQuery event 객체 
+ 속성
 	- type : 이벤트 종류
 	- which : 눌러진 버튼이나 키
 	- data : 이벤트가 발생했을 때 함수에 전달된 추가 정보들 (자세한 것은 아래 예제 확인)
 	- target : 이벤트가 발생한 DOM 요소
 	- pageX : 뷰포트의 가로 위치
 	- pageY : 뷰포트의 세로 위치
 	- timeStamp : 유닉스 시간
+ 메서드
	- .preventDefault() : 기본 동작을 취소
	- .stopPropagation() : 상위 객체로 이벤트가 버블링 되는 것을 중단
*/
// 항목을 클릭하면 날짜와 이벤트 타입 출력
$(function () {
	$('li').on('click', function (e) {
		$('li span').remove();
		var date = new Date();
		date.setTime(e.timeStamp);
		var clicked = date.toDateString();
		$(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
	});
});


/*
이벤트 핸들러 .on() 옵션 매개변수

.on(event, selector, data, function(e));
selector : jQuery 객체집합 내의 요소 중 일부 요소들만 이벤트를 대응할 때 사용
data : 이벤트가 발생했을때 호출될 함수에 추가정보 전달(객체 e와 함께 전달)
*/
// id="four"인 항목을 제외하고 click or mouseover 이벤트가 발생할 때, 
// 상태 메시지 출력
$(function () {
	var listItem, itemStatus, eventType;

	$('ul').on(
		'click mouseover', 
		':not(#four)',
		{status: 'important'}, 
		function (e) {
			listItem = 'Item: ' + e.target.textContent + '</br>';
			itemStatus = 'Status: ' + e.data.status + '</br>';
			eventType = 'Event: ' + e.type + '</br>';
			$('#notes').html(listItem + itemStatus + eventType);
		}
	);
});

