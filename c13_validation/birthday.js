(function () {
  var $birth            = $('#birthday');           // 생일 입력 창
  var $parentsConsent   = $('#parents-consent');    // 부모 동의 체크박스
  var $consentContainer = $('#consent-container');  // 체크박스 부모 요소 

  // HTML5 날짜 입력창과 기능상 충돌이 방지를 위해
  // jQuery .prop() 메서드를 이용하여 type 특성값을 바꾼다.
  // .data 메서드를 이용해 type 특성을 date로 설정
  // jQuery UI의 .datepicker() 메서드를 이용해 날짜 입력창을 출력 
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'  // 날짜 형식을 지정 (y는 연도를 2자리로 표현, yy는 연도를 4자리로 표현)
  });

  $birth.on('blur change', checkDate);  // 사용자가 날짜 입력창을 벗어날 경우 
  function checkDate() {
    var dob = this.value.split('-');
    toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleParentsConsent(date) {
    if (isNaN(date)) return;  // 날짜가 숫자가 아닐 경우 함수 실행 중단 
    var now = new Date();

    // 두 날짜의 차이가 13년 미만인지 확인
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {  // 사용자가 13세 미만이면
      $consentContainer.removeClass('hide');  // 부모 동의 체크박스를 노출 
      $parentsConsent.focus();
    } else {
      $consentContainer.addClass('hide');
      $parentsConsent.prop('checked', false);
    }
  }
  
})();