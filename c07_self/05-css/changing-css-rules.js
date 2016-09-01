/*
.css() : CSS 속성 값을 가져오거나 설정
*/


$(function () {
	// get CSS 속성 
	var backgroundColor = $('li').css('background-color');
	$('ul').append('<p>Color was: ' + backgroundColor + '</p>');
	
	// set CSS 속성
	// 여러 속성 값 설정
	// 속성 값은 중괄호 안에 나열
	$('li').css({
		'background-color': '#c5a996',
		'border': '1px solid #fff',
		'color': '#000',
		'text-shadow': 'none',
		'font-family': 'Georgia',
		'padding-left': '+=75'
	});
});
