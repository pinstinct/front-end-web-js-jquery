// 3. HTML 페이지에 지도를 로드 
function init() {
	var pinpoint = new google.maps.LatLng(40.782710,-73.965310);

	var mapOptions= {
		center: pinpoint,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// scaleControl: true,
		zoom: 14,

		// 지도 컨트롤 조정(옵션)
		panControl: false,
		zoomControl: true,	// 지도 확대 수준 
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.TOP_LEFT
		},
		mapTypeControl: true,	 // 지도의 종류 변경 
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		scaleControl: true,	// 지도의 축척 표시
		scaleControlOptions: {
			position: google.maps.ControlPosition.CENTER_RIGHT
		},
		streetViewControl: false,
		overviewMapControl: false,

		/*
		구글 지도의 스타일을 조정하려면 세 가지를 지정해야 한다.
		featureType : 스타일을 적용한 지도를 지정
		elementType : 기하학적 도형이나 레이블 등 해당 기능의 일부에 적용될 스타일을 지정 
		stylers : 지도상의 아이템 표시여부나 색상을 조정할 수 있는 속성을 지정
		*/
		styles: [
			{
				stylers: [
					{ hue: "#00ff6f" },
					{ saturation: -50 }
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ lightness: 100 },
					{ visibility: "simplified" }
				]
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{ hue: "#ff6600" },
					{ saturation: +80 }
				]

			},
			{
				featureType: "transit",
				elementType: "labels",
				stylers: [
					{ hue: "#ff6600" },
					{ saturation: +80 }
				]

			}
		]
	};
	var venueMap;
	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// 4. 마커 추가
	var startPosition = new google.maps.Marker({
		position: pinpoint,
		map: venueMap,
		icon: "img/go.png"
	});
}

// 2. loadScript 함수 생성 
function loadScript() {
	var script = document.createElement('script');	// <script> 요소를 생성 
	// 요소가 로드되면 init() 메서드를 호출
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;	// 1. onload 이벤트가 발생하면 loadScript 함수 호출