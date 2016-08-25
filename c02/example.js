// 환영 메시지를 저장할 변수를 선언
var greeting = '안녕하세요 ';
var name = 'Lim';
var message = ', 주문 내역을 확인해 주세요:';
// 세 변수 값을 결합하여 환영 메시지 작성
var welcome = greeting + name + message;

// 명찰의 상세 정보를 저장할 변수를 선언
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;


// id 값이 greeting인 요소에 환영 메시지를 출력
var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;