// /* @lin, get-element-by-id.js */
// var elOne = document.getElementById('one');
// elOne.className = 'cool';


// /* @lim, get-elements-by-class-name.js */
// var elThree = document.getElementsByClassName('hot');

// if (elThree.length > 2) {
// 	elThree[2].className = 'cool';
// } 


// /* @lim, get-elements-by-tag-name.js */
// var elOne = document.getElementsByTagName('li');

// if (elOne.length > 0) {
// 	elOne[0].className = 'cool';	
// }


// /* @lim, query-selector.js */
// var elOne = document.querySelector('li.hot');
// elOne.className = 'cool';

// var elThree = document.querySelectorAll('li.hot');
// elThree[1].className = 'cool';


// /* @lim, node-list.js*/
// var elHot = document.querySelectorAll('li.hot');
// if (elHot.length > 0) {
// 	for (var i = 0; i < elHot.length; i++) {
// 		elHot[i].className = 'cool';
// 	}
// }

// /* @lim, sibling.js */ 
// var elTwo = document.getElementById('two');
// firstItem = elTwo.previousSibling;
// thirdItem = elTwo.nextSibling;

// firstItem.className = 'complete';
// thirdItem.className = 'cool';


// /* @lim, child.js */
// var root = document.getElementsByTagName('ul')[0];
// var firtsChild = root.firstChild;
// var lastChild = root.lastChild;

// firtsChild.className = 'complete';
// lastChild.className = 'cool';


// /* @lim, node-value.js */
// var elTwo = document.getElementById('two');
// elTwo.firstChild.nodeValue = '양배추';


// /* @lim, inner-html.js */
// var firstItem = document.getElementById('one');
// var itemContent = firstItem.innerHTML;
// firstItem.innerHTML = '<a href=\"http://google.com\">' + itemContent + '</a>';


// /* @lim, add-element.js */
// var elBlank = document.createElement('li');
// var msg = document.createTextNode('퀴노아');
// elBlank.appendChild(msg);

// var position = document.getElementsByTagName('ul')[0];
// position.appendChild(elBlank);


// /* @lim, remove-element.js */
// var removeE1 = document.getElementById('four');
// var parentE1 = document.getElementById('four').parentNode;

// parentE1.removeChild(removeE1);


// /* @lim, get-attribute.js */
// var elOne = document.getElementById('one');

// if (elOne.hasAttribute('class')) {
// 	var msg = elOne.getAttribute('class');

// 	var el = document.getElementById('scriptResults');
// 	el.innerHTML = '<p>첫 번째 아이템의 클래스 이름은 ' + msg + '입니다. </p>';
// }


// /* @lim, set-attribute.js */
// var elOne = document.getElementById('one');
// elOne.className = 'complete';

// var elFour = document.getElementsByTagName('li')[3];
// elFour.setAttribute('class', 'cool');


// /* @lim, remove-attribute.js */
// var elOne = document.getElementById('one');

// if (elOne.hasAttribute('class')) {
// 	elOne.removeAttribute('class');
// }
