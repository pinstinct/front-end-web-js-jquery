/* 
.html() : HTML 코드를 리턴
.text() : 텍스트들을 리턴
*/

var $listHTML = $('ul').html();
$('ul').append($listHTML);	// .append() : 페이지에 콘텐츠 추가

var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');

// 이 경우 첫 번째 <li> 요소의 콘텐츠만 리턴
// 모든 값을 조회하려면 .each() 메서드를 참조
var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '</i>');

// item 사이에 공백은 추가 되지않음
// <input> or <textare> 요소에서 내용을 가져오려면 .val() 메서드 참조
var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>');
