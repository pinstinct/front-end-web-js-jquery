// 1. XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// 4. 서버로부터 응답을 받으면 객체의 onload 이벤트 발생 
xhr.onload = function () {
	if (xhr.status === 200) {
		// 4. XML 데이터 처리
		var response = xhr.responseXML();	// 서버에서 XML 데이터 리턴 
		var events
	}
};

// 2. 요청 준비
xhr.open('GET', '../data/data.html', true);
// 3. 요청 전송
xhr.send(null);