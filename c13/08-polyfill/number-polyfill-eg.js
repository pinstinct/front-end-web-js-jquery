/*
대체 기능 스크립트를 모든 사용자에게 제공하는 것보다는 
조건식 로더(conditional loader)를 이용하는 편이 낫다.

이들은 조건이 true 또는 false 중 어떤 값을 리턴하는가에 따라
서로 다른 파일을 로드한다.

Modernizr는 YepNope.js라고 부르는 조건식 로더를 주로 사용한다.
*/

// YepNope에는 주로 최소 세 개의 속성을 가지는 객체 표현식을 전달
yepnope({
	test: Modernizr.inputtypes.number,	// 검사할 조건식
	yep: ['../js/numPolyfill.js', '../css/number.css'], 	// true를 리턴하면 로드할 파일 지정
	nope: ['../js/numPolyfill.js', '../css/number.css'], 	// false를 리턴하면 로드할 파일 지정
	complete : function () {	// 검사를 완료 후 실행될 함수나 로드해야 할 파일 지정
		console.log('YepNope + Modernizr 종료');
	}
});