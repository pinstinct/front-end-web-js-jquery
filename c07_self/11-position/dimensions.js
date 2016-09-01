/*
영역의 크기 
다음 메서드들은 픽셀 값을 리턴한다.

.height() : element의 높이를 리턴
.width() : element의 너비를 리턴
.innerHeight() : element + padding의 높이를 리턴
.innerWidth() : element + padding의 너비를리턴
.outerHeight() : element + padding + border의 높이를 리턴
.outerWidt() : element + padding + border의 너비를 리턴
.outerHeight(true) : element + padding + border+margin의 높이를 리턴
.outerWidth(true) : element + padding + border+margin의 너비를 리턴
*/
$(function () {
	var listHeight = $('#page').height();
	$('ul').append('<p>Height: ' + listHeight + ' px</p>');
	// %나 em 단위를 이용하려면 문자열로 지정
	// 픽셀의 경우 추가로 단위를 덧붙이지 않아도 됨
	$('li').width('50%');
	$('li#one').width(145);
	$('li#two').width('75%');
});