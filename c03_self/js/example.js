// PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
var hotel = {
	hotelName: 'Park',
	roomRate: 240,	// Amount in dollars
	discount: 15,	// Percentage discount
	offerPrice: function () {
		var offerRate = this.roomRate * ((100 - this.discount)/100);
		return offerRate;
	}
}

var elHotelName = document.getElementById('hotelName');
elHotelName.textContent = hotel.hotelName;

/*
toFixed(x) : Formats a number with x numbers of digits after the decimal point
http://www.w3schools.com/jsref/jsref_obj_number.asp
*/
var elRoomRate = document.getElementById('roomRate');
elRoomRate.textContent = '$' + hotel.roomRate.toFixed(2);

var elSpecialRate = document.getElementById('specialRate');
elSpecialRate.textContent = '$' + hotel.offerPrice();


// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiryMsg;	// Message displayed to users
var today;		// Today's date
var elEnds;		// The element that shows the message about the offer ending

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;

	// Add 7 days time
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

	// Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
