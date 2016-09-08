// 사용자가 비밀번호 창을 벗어날 때 피드백을 제공
(function () {
  var password = document.getElementById('password');
  var passwordConfirm = document.getElementById('conf-password');

  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;
    if (target.value.length < 8) {  // 패스워드 길이 확인
      target.className = 'fail'; 
    } else {
      target.className = 'pass';
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;
    if (target.className === 'fail') {
      target.className = '';
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;

    // 두 비밀번호가 일치 && 8자 이상 확인 
    if ((password.value === target.value) && target.value.length >= 8) {
      target.className = 'pass';  
    } else {
      target.className = 'fail';
    }
  }

  addEvent(password, 'focus', removeErrorHighlighter);
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordsMatch);
  
}());