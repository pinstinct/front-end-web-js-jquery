/*
- 기본 효과
	+ .show() : 선택된 아이템을 보이게 한다
	+ .hide() : 선택된 아이템을 숨긴다.
	+ .toggle() : 선택된 아이템을 보이거나 숨기는 효과를 번갈아 적용한다.
- 페이드 효과
	+ .fadeIn() : 불투명하게 만들어 서서히 나타나는 효과
	+ .fadeOut() : 투명하게 만들어 서서히 사라지는 효과
	+ .fadeTo() : 불투명도 조절
	+ .fadeToggle() : 불투명도를 조졸하여 숨기거나 보이게 한다. (현대 상태의 반대로 전환)
- 슬라이딩 효과
	+ .slideUp() : 슬라이드 되어 사라지는 효과
	+ .slideDown() : 슬라이드 되어 나타나는 효과
	+ .slideToggle() : 슬라이드 효과를 적용하여 나타나거나 사라지게 한다. (현대 상태의 반대로 전환)
- 임의 효과
	+ .delay() : 큐 내의 다음 아이템의 실행을 잠시 지연
	+ .stop() : 현재 실행 중인 애니메이션을 중단
	+ .animate() : 새로운 임이의 애니메이션을 생성 
*/
// 페이지가 로드되면 페이드인 효과로 목록 노출
// 목록을 클릭하면 페이드아웃 효과로 사라짐
$(function () {
	$('h2').hide().slideDown();

	var $li = $('li');
	$li.hide().each(function (index) {
		$(this).delay(700 * index).fadeIn(700);
	});

	// $li.on('click', function () {
	// 	$(this).fadeOut(700);
	// });
});


/*
.animate() : CSS 속성 값을 변화시켜 효과와 애니메이션을 직접 구현
height, width, font-size 처럼 값이 숫자로 표현될 수 있는 속성에 사용
font-size는 fontSize로 표기하여 적용한다.

.animate({
	paddinb: '+=80'
}, speed, easing, complete);
speed : 애니메이션이 진행될 시간의 길이를 밀리초 단위로 지정 (low, fast 키워드도 사용 가능)
easing : linear, swing
complete : 애니메이션이 종료될때 호출될 함수(이런 함수를 콜백 함수(callback function)이라고 한다)
*/

$(function () {
	$('li').on('click', function () {
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80'
		}, 500, function () {
			$(this).remove();
		});
	});
});