$(function () {
	
	// 초기화
	var $newItemForm = $('#newItemForm');
	var $newItemButton = $('#newItemButton');
	var $list = $('ul');
	var item = '';

	$('li').hide().each(function (index) {
		$(this).delay(450 * index).fadeIn(1600);
	});

	// 아이템 개수 노출
	function updateCount() {
		var number = $('li[class!=complete]').length;
		$('#counter').text(number);
	}
	updateCount();

	// 아이템 추가 레이아웃
	$newItemButton.show();
	$newItemForm.hide();
	$('#showForm').on('click', function () {
		$newItemButton.hide();
		$newItemForm.show();
	});

	// 새로운 목록 아이템 추가 기능
	$newItemForm.on('submit', function (e) {
		e.preventDefault();
		var newText = $('input:text').val();
		$list.append('<li>' + newText + '</li>');
		$('input:text').val('');
		updateCount();
	});

	// 작업 완료 기능 
	// a. click > 완료상태로 변경 > 목록 아래로 이동 > 아이템 개수 수정
	// b. dbclick > 페이드아웃 효과 > 아이템 제거
	$list.on('click', 'li', function () {
		var $this = $(this);
		var complete = $this.hasClass('complete');	// 아이템이 완료 상태인지 확인

		if (complete === true) {	// 그렇다면 애니메이션 재생
			$this.animate({
				opacity: 0.0, 
				paddingLeft: '+=180'
			}, 500, 'swing', function () {	// 애니메이션이 완료되면 콜백 함수를 호출
				$this.remove();
			});
		} else {	// 그렇지 않으면 완료상태로 변경
			item = $this.text();
			$this.remove();
			$list
				.append('<li class=\"complete\">' + item + '</li>')
				.hide().fadeIn(300);
			updateCount();
		}
	});
});