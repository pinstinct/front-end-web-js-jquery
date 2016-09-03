$(function () {
  
  var times;
  $.ajax({
    // JSON 데이터를 요청하기 전에 브라우저가 overrideMimeType() 메서드를 지원하는지 검사
    // overrideMimeType() : 서버에게 응답 데이터를 JSON으로 취급할 것임을 알림
    berforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  // JSON 파일에서 데이터 수집
  function loadTimetable() {
    $.getJSON('data/example.json')
      .done(function (data) {
        times = data;})
      .fail(function (data) {
        $('#event').html('Sorry! We could not load the timetable at the moment');
      });
  }

  loadTimetable();

  // 장소를 클릭하면 시간표 출력 
  $('#content').on('click', '#event a', function (e) {
    e.preventDefault();
    var loc = this.id.toUpperCase();
    var newContent = '';

    for (var i = 0; i < times[loc].length; i++) {
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#'
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';  // 공백을  - 로 바꾼다.
      newContent += times[loc][i].title + '</a></li>';
    }
    $('#sessions').html('<ul>' + newContent +'</ul>');

    $('#event a.current').removeClass('current');
    $(this).addClass('current');

    $('#details').text(''); // 세번째 열을 비운다.
  });

  // 세션을 클릭하면 상세 정보 노출 
  $('#content').on('click', '#sessions li a', function (e) {
    e.preventDefault();
    var fragment = this.href;

    // # 기호 앞에 공백을 추가하여 jQuery .load() 함수가 HTML 페이지의 일부만 로드할 수 있도록 한다.
    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#sessions a.current').removeClass('current');
    $(this).addClass('current');
  });

  // 상단 네비게이션을 처리
  $('nav a').on('click', function(e) {                       // Click on nav
    e.preventDefault();                                      // Prevent loading
    var url = this.href;                                     // Get URL to load

    $('nav a.current').removeClass('current');               // Update nav
    $(this).addClass('current');

    $('#container').remove();                                // Remove old part
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
  });

});