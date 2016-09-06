/*
크로스 브라우저를 지원하는 "이벤트 핸들러 생성" 함수 
el : 이벤트를 추가하거나 제거할 DOM 노드를 표현하는 요소를 지정
event : 핸들러를 등록하고자 하는 이벤트를 지정
callback : 요소에서 지정한 이벤트가 발생했을 때 실행될 함수 지정 
*/
function addEvent(el, event, callback) {
	if ('addEventListener' in el) {
		el.addEventListener(event, callback, false);
	} else {
		el['e' + event + callback] = callback;	// (1)callback 함수를 el 요소의 메서드로 만든다.
		el[event + callback] = function () {
			el['e' + event + callback](window.event);	// (1)에서 작성한 메서드에 event 객체를 전달한다.
		};
		el.attachEvent('on' + event, el[event + callback]);
	}
}