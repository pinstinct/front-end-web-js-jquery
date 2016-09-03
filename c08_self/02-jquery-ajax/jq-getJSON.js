$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
	$.getJSON('../data/rates.json')
	// 요청이 정상적으로 처리된 경우
	.done(function (data) {
		var d = new Date();
		var hrs = d.getHours();
		var mins = d.getMinutes();
		var msg = '<h2>Exchange Rates</h2>';
		$.each(data, function (key, val) {
			msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
		});
		msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';
		$('#rates').html(msg);
	})
	// 요청이 실패한 경우
	.fail(function () {
		$('#rates').text('Sorry, we cannot load rates. ');
	})
	// 요청의 성공, 실패와 상관없이 실행
	.always(function () {
		var reload = '<a id="refresh" href="#">';
		reload += '<img src="../img/refresh.png" alt="refresh" /></a>';
		$('#reload').html(reload);
		$('#refresh').on('click', function (e) {
			e.preventDefault();
			loadRates();
		});
	});
}

loadRates();