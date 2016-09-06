/*
커서가 textarea 요소안에 있는 동안에
<span> 요소를 이용해 앞을 몇 글자를 더 입력할 수 있는지 표시
*/
(function () {
	var bio = document.getElementById('bio'),
		bioCount = document.getElementById('bio-count');

	addEvent(bio, 'focus', updateCounter);
	addEvent(bio, 'input', updateCounter);

	addEvent(bio, 'blur', function () {
		if (bio.value.length <= 140) {
			bioCount.className = 'hide';
		}
	});

	function updateCounter(e) {
		var target = e.target || e.scrElement;
		var count = 140 - target.value.length;	// 남은 글자 수 계산 
		if (count < 0) {
			bioCount.className = 'error';
		} else if (count <= 15) {
			bioCount.className = 'warn';
		} else {
			bioCount.className = 'good';
		}
		var charMsg = '<b>' + count + '</b>' + '글자';
		bioCount.innerHTML = charMsg;
	}
}());