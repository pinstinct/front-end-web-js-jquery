// 1. 목록의 처음과 마지막에 새로운 아이템을 추가

// <ul> 요소를 가져온다.
var elList = document.getElementsByTagName('ul')[0];

// 목록의 시작에 아이템을 추가
/* by @lim
var listContent = elList.innerHTML;
var addFirstItem = '<li>kale</li>'
elList.innerHTML = addFirstItem + listContent;
*/
var firstItem = document.createElement('li');
var firstItemContent = document.createTextNode('kale');
firstItem.appendChild(firstItemContent);
elList.insertBefore(firstItem, elList.firstChild);	// 새로운 콘텐츠를 어느 요소 앞에 삽입할 것인지 지정하여 추가


// 목록의 끝에 아이템을 추가
var lastItem = document.createElement('li');
var lastItemContent = document.createTextNode('cream');
lastItem.appendChild(lastItemContent);
elList.appendChild(lastItem);	// 새로 지정한 콘텐츠는 마지막 자식요소로 추가


// 2. 모든 아이템의 class 특성 값을 설정
var elItems = document.getElementsByTagName('li');

for (var i = 0; i < elItems.length; i++) {
	/* by @lim
	elItems[i].setAttribute('class', 'cool');
	*/
	elItems[i].className = 'cool';
}


// 3. 제목에 목록 전체 아이템 개수를 출력
var elTitle = document.getElementsByTagName('h2')[0];
var titleContent = elTitle.innerHTML;

var count = elItems.length;
var msg = titleContent + '<span>' + count + '</span>';
elTitle.innerHTML = msg;
