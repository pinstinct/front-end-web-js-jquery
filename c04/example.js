var i = 1;					// Set counter to 1
var table = 3;				// Unit of table
var operator = 'addition'	// Type of calculation
var msg = '';

if (operator === 'addition') {
	// Do addition
	for (; i < 11; i++) {
		result = i + 3;
		msg += i + ' + ' + 3 + ' = ' + result + '<br/>';
		
	}

} else {
	// Do multiplication
	for (; i < 11; i++) {
		result = i * 3;
		msg += i + ' * ' + 3 + ' = ' + result + '<br/>';
	}

}

// Write the message into the page
var elBlackboard = document.getElementById('blackboard');
elBlackboard.innerHTML = msg;
