/*
창(window)과 페이지(document)의 크기
.height() : jQuery 객체집합의 높이를 리턴
.width() : jQuery 객체집합의 너비를 리턴
.scrollLeft() : jQuery 객체집합 내 첫 번째 아이템의 수평 스크롤 위치를 리턴(or 전체 노드의 수평 스크롤 위치를 리턴)
.scrollTop() : jQuery 객체집합 내 첫 번째 아이템의 수직 스크롤 위치를 리턴(or 전체 노드의 수평 스크롤 위치를 리턴)

페이지에서 요소의 위치
아래 메서드들은 top, left 속성을 가진 객체를 리턴
.offset() : document 객체의 좌측 상단 모서리부터 요소까지의 좌표를 리턴
.position() : 상위 요소부터 해당 요소까지 좌표를 리턴(상위요소가 없으면 .offset()메서드와 동일한 값 리턴)
*/
$(function () {
	var $window = $(window);
	var $slideAd = $('#slideAd');
	// endZone 계산법
	// 페이지(document)의 최상단으로부터 footer상단의 높이를 구한다.
	// 뷰포트(window)의 높이를 뺀다.
	// 광고창이 나타날 영역을 위해 추가로 500px을 뺀다.
	var endZone = $('#footer').offset().top - $window.height() - 500;

	$window.on('scroll', function () {
		// 현재 스크롤 된 위치와 엔드 존의 시작 지점을 비교
		if (endZone < $window.scrollTop()) {
			// 페이지 오른쪽 가장자리에서부터 광고창을 슬라이드
			// 효과는 250밀리초동안 재생
			$slideAd.animate({ 'right':'0px'}, 250);
		} else {
			$slideAd.stop(true).animate({ 'right':'-360px'}, 250);
		}
	});
});