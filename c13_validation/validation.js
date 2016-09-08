// Dependencies: jQuery, jQueryUI, birthday.js, styles.css

(function () {
	// A. 스크립트 초기화
	document.forms.register.noValidate = true;	// HTML5 유효성 검사를 비활성화

	$('form').on('submit', function (e) {
		var elements = this.elements;	// 폼 컨트롤 컬렉션
		var valid = {}; 					// valid 객체
		var isValid; 					// 폼 컨트롤의 유효성 여부
		var isFormValid; 				// 폼 전체의 유효성 여부

		// B. 기본 유효성 검사 실행
		var i;
		for (i = 0, l = elements.length; i < l; i++) {	// 모든 폼 컨트롤에 대해 루프 실행 
			// 폼이 필수요소인지 확인 && 데이터 형식이 적합한지 확인
			// 둘 중 하나라도 false면 isValid 값은 false
			isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
			if (!isValid) {
				showErrorMessage(elements[i]);		// 오류 메시지 출력 
			} else {
				removeErrorMessage(elements[i]);	// 오류 메시지 출력 요소 제거 
			}
			valid[elements[i].id] = isValid;	// valid 객체의 [key = 요소 id] = 값은 isValid(true or flase)
		}

		// C. 추가 유효성 검사 실행
		// (1) 자기소개가 제한된 길이를 넘지 않는가?
		// (2) 비밀번호가 일치하는가?
		// (3) 사용자가 나이 제한의 적용을 받는가?
		if (!validateBio()) {
			showErrorMessage(document.getElementById('bio'));
			valid.bio = false;
		} else {
			removeErrorMessage(document.getElementById('bio'));
		}
		if (!validatePassword()) {
			showErrorMessage(document.getElementById('password'));
		} else {
			removeErrorMessage(document.getElementById('password'));
		}
		if (!validateParentsConsent()) {
			showErrorMessage(document.getElementById('parents-consent'));
		} else {
			removeErrorMessage(document.getElementById('parents-consent'));
		}

		// D. 폼이 유효한가?
		for (var field in valid) {
			// 유효하지 않은 요소가 발견되면 isFromValid 변수에 false 값을 설정
			if (!valid[field]) {
				isFormValid = false;
				break;
			}
			isFormValid = true;
		}
		// isFromValid 값이 false면 폼의 전송을 중단 
		if (!isFormValid) {
			e.preventDefault();
		}
	});	// 이벤트 핸들러 종료

	// ------------------------------------------------------
	/* 호출된 함수들 구현 */
	// validateRequired() 함수는 먼저 특성 존재 여부를 검사한다.
	// 이후 특성이 존재하면 값이 입력되었는지를 확인한다.
	// (1) isRequired() 함수는 요소에 required 특성이 존재하는지 확인
	// (2) isEmpty() 함수는 요소가 값을 가지고 있는지 확인
	// (3) setErrorMessage() 함수는 오류 발견 시 오류 메시지 설정 
	function validateRequired(el) {	// 매개변수로 검사할 요소 전달 
		if (isRequired(el)) {			// a. required 특성이 있을 경우
			var valid = !isEmpty(el);	// a-1. 요소에 값이 있다면 true, 없다면 false가 설정 
			if (!valid) {				
				setErrorMessage(el, '필수 입력 필드입니다.');
			}
			return valid;				
		}
		return true;					// b. required 특성이 없을 경우		
	}

	function isRequired(el) {	// true or false 리턴 
		// typeof 연산자는 브라우저가 required 특성에 사용하는 데이터 타입을 검사
		return ((typeof el.required === 'boolean') && el.required) ||	// 최신 브라우저
		(typeof el.required === 'string');								// 구 버전 브라우저 
	}

	function isEmpty(el) {
		return !el.value 				// 최신 브라우저
		|| el.value === el.palceholder;	// 구 버전 브라우저 (구 버전 브라우저는 palceholder 기능을 구현하고 있기 때문에 이 값이 안내 문구와 동일할 경우 값이 비어있는 것으로 간주)
	}

	// setErrorMessage() 함수는 두 개의 매개 변수가 필요
	// el : 오류가 발견된 요소
	// message : 표시될 오류 메시지
	function setErrorMessage(el, message) {
		// jQuery .data() 메서드는 jQurey 객체에 개별 요소를 위한 키/값 쌍을 저장한다.
		$(el).data('errorMessage', message);	// 요소에 오류 메시지 저장 
	}
	function getErrorMessage(el) {
	    return $(el).data('errorMessage') || el.title;       // Get error message or title of element
	}
	// jQuery .data() 메서드를 이용하면 저자왼 메시지를 다시 가져올 수 있다.
	// 이 경우에 키에 해당하는 매개변수만 지정하면 된다.
	function showErrorMessage(el) {
		var $el = $(el);
		var errorContainer = $el.siblings('.error.message');	// 해당 요소의 옆에 class 특성이 error인 요소가 존재하는지 확인 

		if (!errorContainer.length) {	// errorContainer.length가 false일 경우
			errorContainer = $('<span class="error message"></span>').insertAfter($el);	// <span> 요소 추가 
		}
		errorContainer.text(getErrorMessage(el));	// .data의 메서드를 이용해 오류 메시지 표시 
	}
	function removeErrorMessage(el) {
	    var errorContainer = $(el).siblings('.error.message'); // Get the sibling of this form control used to hold the error message
	    errorContainer.remove();                               // Remove the element that contains the error message
	}


	function validateTypes(el) {
		if (!el.value) return true;	// 요소가 값을 가지고 있는지 확인 (값이 없다면, 데이터 검사를 할 수 없다.)

		var type = $(el).data('type') || el.getAttribute('type');	// 요소에 입력된 값이 있다면, 요소의 type 특성 값을 저장 
		if (typeof validateType[type] === 'function') {	// validateType 객체가 type 특성 값과 동일한 이름의 함수를 가지고 있는지 검사 
			return validateType[type](el);	// 객체의 함수에 요소를 전달 
		} else {
			return true;
		}
	}

	// 정규 표현식(regular expression)이라는 것을 이용하여 데이터의 유효성을 검사 
	// 정규 표현식은 문자열의 패턴을 검사하기 위한 방법
	var validateType = {
		email: function (el) {
			// 메일 주소를 검사
			var valid = /[^@]+@[^@]+/.test(el.value);	// 하나의 매개변수를 전달받아 해당 문자열에 지정된 패턴이 있는지 검사 (불리언 값 리턴)
			if (!valid) {
				setErrorMessage(el, '올바른 메일 주소를 입력하세요');
			}
			return valid;
		},
		number: function (el) {
			// 숫자를 검사
			var valid = /^\d+$/.test(el.value);
			if (!valid) {
				setErrorMessage(el, '숫자를 입력하세요');
			}
			return valid;
		},
		date: function (el) {
			// 날짜를 검사 
			var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
			if (!valid) {
				setErrorMessage(el, '날짜를 입력하세요');
			}
			return valid;
		}
	};

	function validateBio() {
		var bio = document.getElementById('bio');
		var valid = bio.value.length <= 140;	// 자기 소개가 140자 이하인지 확인
		if (!valid) {
			setErrorMessage(bio, '자기소개는 140자를 넘을 수 없습니다');
		}
		return valid;
	}

	function validatePassword() {
		var password = document.getElementById('password');
		var valid = password.value.length >= 8;	// 비밀번호가 8자 이상인지 확인 
		if (!valid) {
			setErrorMessage(password, '비밀번호는 8자 이상이어야 합니다');
		}
		return valid;
	}

	function validateParentsConsent() {
		var parentsConsent = document.getElementById('parents-consent');
		var consentContainer = document.getElementById('consent-container');
		var valid = true;

		if (consentContainer.className.indexOf('hide') === -1) {	// hide 특성 값이 있는지 확인, 값이 존재하지 않으면 -1 리턴 
			valid = parentsConsent.checked;	// 체크박스 체크여부 저장
			if (!valid) {
				setErrorMessage(parentsConsent, '부모님의 동의가 필요합니다');
			}
		}
		return valid;
	}

}());	// 함수의 끝