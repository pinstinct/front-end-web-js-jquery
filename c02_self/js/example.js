var hello = 'Howdy '
var userName = 'Lim'
var noti = ', please check your order:'
var msg = hello + userName + noti;

var elMsg = document.getElementById('greeting');
elMsg.textContent = msg;


var userSign = 'Montague House';
var tiles = userSign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elUserSign = document.getElementById('userSign');
elUserSign.textContent = userSign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;