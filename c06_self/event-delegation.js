// 4. 이벤트 발생 요소
function getTarget(e) {
	if (!e) {
		e = window.event;
	}
	return e.target || e.srcElement;
}

// 5. itemDone 함수 생성
function itemDone(e) {
	// 6. 변수 선언
	var target, elParent, elGrandparent;

	target = getTarget(e);
	elParent = target.parentNode;
	elGrandparent = target.parentNode.parentNode;

	// 7. <ul> 요소에서 <li> 요소 제거
	elGrandparent.removeChild(elParent);

	// 8. preventDefault() 메서드 지원 여부 확인
	if (e.preventDefault) {
		// 8-1. 지원할 경우
		e.preventDefault();
	} else {
		// 8-2. 지원하지 않을 경우 (for IE)
		e.returnValue = false;
	}
}


// 1. <ul> 요소
var elUl = document.getElementById('shoppingList');

// 2. addEventListener() 메서드 지원 여부 확인
if (addEventListener) {
	// 3-1. 지원할 경우
	elUl.addEventListener('click', function (e) {
		itemDone(e)	
	}, false);
} else {
	// 3-2. 지원하지 않을 경우 (for IE)
	elUl.attachEvent('onclick', function (e) {
		itemDone(e)
	});
}