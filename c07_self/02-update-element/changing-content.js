/*
.html() : HTML을 포함한 새로운 콘텐츠 추가
.text() : 텍스트 콘텐츠 추가
.replaceWith() : 일치하는 모든 요소에 새로운 콘텐츠 추가 
.remove() : 일치하는 요소 제

.html(), .replaceWith() 메서드는 DOM innerHTML 속성을 이용할 때와 동일한 보안 위험(XSS)을 가지고 있다.
*/
$(function () {
	// .text()
	$('li:contains("pine nuts")').text('almonds');
	// .html()
	$('li.hot').html(function () {
		return '<em>' + $(this).text() + '</em>';
	});
	// .remove()
	$('li#one').remove();
})