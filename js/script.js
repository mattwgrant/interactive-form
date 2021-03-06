// Global variables
const title = document.querySelector('#title');
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const checkboxes = document.querySelectorAll('.activities input');
const paymentType = document.querySelector('#payment');
// This creates a span element to display the total price
const displayTotal = document.createElement('SPAN');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const ccNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
// const paymentMethod = document.querySelector('label[for="payment"]');
const activitiesList = document.querySelectorAll('.activities input');
const activitiesContainer = document.querySelector('.activities legend');
// This sets the total at zero to start
let total = 0;
const form = document.querySelector('form');
const alertName = document.createElement('SPAN');
const alertEmail = document.createElement('SPAN');
const alertEmailAlt = document.createElement('SPAN');
const alertActivity = document.createElement('SPAN');
const alertType = document.createElement('SPAN');
const alertCard = document.createElement('SPAN');
const alertZip = document.createElement('SPAN');
const alertCVV = document.createElement('SPAN');

/*** 
	This function selects the input with the ID of name
	and puts the focus there so that the user can start 
	typing their name as soon as the page loads, without
	having to manually go to the field
***/

document.getElementById('name').focus();

/***
	This listener uses querySelector to get the input
	element that is only to be present if 'Other' is
	selected from the Job Role dropdown and set it to
	be hidden when the page loads. Also disables the ability
	to select 'Select Theme' from the tshirt drop down. Also
	hides the option to choose a color
***/

window.addEventListener('load', () => { 
	document.querySelector('#other-title').hidden = true;
	document.querySelector('#design option').hidden = true;
	document.querySelector('#colors-js-puns').hidden = true;
	document.querySelector('#design option').setAttribute('disabled', true)
});

/***
	This hides all payment options except for credit card on load. It also
	sets the Select Payment Method drop down option to disabled so that it
	cannot be chosen.
***/

window.addEventListener('load', () => {
	document.querySelector('#paypal').hidden = true;
	document.querySelector('#bitcoin').hidden = true;
	// Hides Select Method so it cannot be chosed
	document.querySelector('option[value="select method"]').hidden = true;
	document.querySelector('option[value="select method"]').setAttribute('disabled', true);
	// Set Credit Card to default option
	document.querySelector('option[value="credit card"]').selected = true;
})

/***
	This listener sets the default drop down selection on load to 
	say 'Please select a T-shirt design' as no style is selected 
	on page load
***/

window.addEventListener('load', () => { 
	color.innerHTML = '<option>Please select a T-shirt theme</option>';
});

/***
	This function hides and shows the input depending on if 
	'other' was selected from the Job Role drop down
***/

// This line use query selector to target the select element with the id of title
title.addEventListener('change', () => {
	// Set a variable for the input field with an ID of 'other-title'
	let other = document.querySelector('#other-title');
	// The conditional is used to determine if 'other' is the value of the select element
	if ( title.value === 'other') {
		// If 'other' was selected, the hidden value is changed to false, 
		// thereby displaying the input
		other.hidden = false;
	} else {
		// If 'other' is not selected, or if it is and then the user selects another
		// instead, the field is hidden again by setting the value of 'hidden' to 'true'
		other.hidden = true;
	}
});

/***
	This function changes the color options for the t-shirts depending on what 
	shirt design is chosen. The event listener is looking for a change to the design 
	option menu and triggers further events based off of this.
***/

design.addEventListener('change', () => {

	// hides 'select theme' option after clicking dropdown
	let shirtOption = document.querySelector('option[value="select method"]');
	shirtOption.style.visibility = 'hidden';

	// If the value of design matches 'js puns', the inner HTML changes to 
	// display the color for that shirt design and will not display any other
	// color options. The different colors are all placed together by appending 
	// each one to the next


	if ( design.value === 'js puns' ) {
		// Shows the colors option drop down
		document.querySelector('#colors-js-puns').hidden = false;
		// Shirt colors that display with selected shirt
		color.innerHTML = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>`;
		color.innerHTML += `<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>`;
		color.innerHTML += `<option value="gold">Gold (JS Puns shirt only)</option>`;

		// This works the same way as the previous option but with the 'heart js' shirt

	} else if ( design.value === 'heart js' ) {
		// Shows the colors option drop down
		document.querySelector('#colors-js-puns').hidden = false;
		// Shirt colors that display with selected shirt
		color.innerHTML = `<option value="tomato">Tomato (I &#9829; JS shirt only)</option>`;
		color.innerHTML += `<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> `;
		color.innerHTML += `<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`;
		
		// Determines if the value is equal to 'Select Theme' and if it is,
		// changes the inner HTML of the drop down to read 'Please select a T-shirt 
		// theme'. Though I have this set on page load, if the customer changes back to
		// this option it needs to be able to change again

	} else {
		document.querySelector('#colors-js-puns').hidden = true;
	}
}); 

/***
	This function is used to set an event listener on the activities fieldset. Passing
	e in as the parameter and creating a variable 'selected' that equal e.target makes
	the event fire when one of the checkboxes is selected.
***/ 

document.querySelector('.activities').addEventListener('change', (e) => {

	// Set two local variables, one for the event target and one to use 
	// later to compare the 'data-day-and-time' attributes for disabling/
	// enabling checkboxes depending on if the time and day conflect.

	const selected = e.target;
	const clickedTime = selected.getAttribute('data-day-and-time');
	
	
	// This defines the item price as the 'data-cost attribute defined
	// in each checkbox element. Using parseInt turns the string into a
	// numerical value that can be added to the 'total' variable
	const price = parseInt(selected.getAttribute('data-cost'));
	
	// A for loop is used to run through all occurences of the checkboxes variable
	for ( let i = 0; i < checkboxes.length; i++ ) {

		// This gets the 'data-day-and-time' of all elements that are defined
		// in the checkboxes variable
		const typeOfCheckbox = checkboxes[i].getAttribute('data-day-and-time');
		
		// This compares the clicked or selected element's 'data-day-and-time'
		// with all others on the list and disables any checkbox that 
		// matches the sslected checkbox's 'data-day-and-time' and leaves
		// all other boxes able to be selected as long as they do not conflict.
		// If an element is unselected then it allows the other ones that were 
		// conficting to now be chosen.

		if ( clickedTime === typeOfCheckbox && selected !== checkboxes[i] ) {

			// This checks to see if a box is selected. if it is, it will
			// disable any other checkbox that has a the same time and date
			// as the selected one. If it is not checked or the check is
			// removed, it makes the corresponding checkboxes active
			if ( selected.checked ) {
				checkboxes[i].disabled = true;
				// If the item is selected, its price is added to the total
				// global variable
				// total += price;
				
			} else {
				checkboxes[i].disabled = false;
				// If the item is unselected, its price is subtracted from the
				// total global variable
				// total -= price;
			}
		}  
	}

	// This conditional states that if a box is selected, the program will add the price
	// to the total. If it is unselected, it will subtract the price. This is outside of
	// of the for loop because if placed inside, it will add the total of the checked 
	// box as many times as the loop has items
	if ( selected.checked ) {
		total += price;
		
	} else {
		total -= price;

	}

	// This selects the legend element for the activities section
	const legend = document.querySelector('fieldset[class="activities"]');
	
	// Here we set the text content so that it displays properly
	displayTotal.textContent = `Total: $${total}`;
	// Appends the displayTotal span to the legend
	legend.appendChild(displayTotal);
});




/***
For all items that are selected, add their prices to the total and then
display the total at the bottom of the 'activities' fieldset. Do I need 
to get the value of the data cost to add it? Or to integer?
***/

/***
	This event listener hides the DIVs of the payment types depending on what
	method has been selected. It uses the variable paymentType, which selects the 
	element with the ID of payment and checks to see what its value attribute is,
	which is found in the option element of its child.
***/

paymentType.addEventListener('change', () => {
	// hides drop down option for Please Select Theme after drop down
	// has been selected
	let paymentMethod = document.querySelector('option[value="select method"]');
	paymentMethod.hidden = true;

	if ( paymentType.value === 'credit card' ) {
		document.querySelector('#credit-card').hidden = false;
		document.querySelector('#paypal').hidden = true;
		document.querySelector('#bitcoin').hidden = true;
	} else if ( paymentType.value === 'paypal' ) {
		document.querySelector('#credit-card').hidden = true;
		document.querySelector('#paypal').hidden = false;
		document.querySelector('#bitcoin').hidden = true;
	} else if ( paymentType.value === 'bitcoin' ) {
		document.querySelector('#credit-card').hidden = true;
		document.querySelector('#paypal').hidden = true;
		document.querySelector('#bitcoin').hidden = false;
	}	

});


/***
  FORM FIELD VALIDATION FUNCTIONS
***/

/***
	This uses a conditional verify that there is more
	than zero characters in the name form field. It also
	creates and appends a span containing an error message
	so that the user knows what they need to fix. If the error
	appears and then is resolved, the message disappears.
***/
function validateName() {
	let nameValue = name.value;
	alertName.style.display = 'block';
	alertName.textContent = 'Please enter your full name';
	alertName.style.color = 'red';
	let label = document.querySelector('label[for="name"]');

	if ( nameValue.length > 0 ) {
		name.style.borderColor = 'green';
		alertName.style.display = 'none';
		return true;
	} else {
		name.style.borderColor = 'red';
		label.appendChild(alertName)
		return false;
	}
}



/***
	This uses a conditional verify that the email address has at least
	two characters before the @ and at least one between the @ and the 
	last period. It also creates and appends a span containing an error 
	message so that the user knows what they need to fix. If the error
	appears and then is resolved, the message disappears.
***/


		

function validateEmail() {
	let emailValue = email.value;
	let indexOfAt = emailValue.indexOf('@');
	let indexOfLastPeriod = emailValue.lastIndexOf('.');
	alertEmail.style.display = 'block';
	alertEmail.textContent = 'Please enter a valid email address';
	alertEmail.style.color = 'red';
	alertEmailAlt.style.display = 'block';
	alertEmailAlt.textContent = 'Email field cannot be blank';
	alertEmailAlt.style.color = 'red';
	let label = document.querySelector('label[for="mail"]');

	// This requires at least one letter or number before a special a '.'' or '_',
	// which are optional and then at least one more letter, number, or '.'/'_'
	// before the '@'. Then is requires another letter or number before the final 
	// '.' at the end of the web address, followed by at least one other letter or 
	// number with the '$' signifying that the string must end with a letter or number
	const regex = /[A-Za-z0-9]+[.|_]?[A-Za-z0-9._]+[@][A-Za-z0-9]+[.][A-Za-z0-9]+$/; 
	
	// The conditional tests to see if the value entered into the email form field,
	// found in the variable 'emailValue', matches the parameters set in the regex
	// variable 
	if ( regex.test(emailValue) === true ) {
		email.style.borderColor = 'green';
		alertEmail.style.display = 'none';
		alertEmailAlt.style.display = 'none';
		return true;
	} else if ( emailValue === '') {
		email.style.borderColor = 'red';
		label.appendChild(alertEmailAlt);
		alertEmail.style.display = 'none';
		return false;
	} else {
		email.style.borderColor = 'red';
		label.appendChild(alertEmail);
		alertEmailAlt.style.display = 'none';
		return false;
	}
}

// Email validation messages appear as soon as someone is typing
// or if the field comes into focus. Message remains until issue
// is corrected
email.addEventListener('keyup', () => {
	validateEmail();
});
email.addEventListener('focus', () => {
	validateEmail();
});

/***
	This function checks to see that at least one activity has been selected
	by looping through the list of options and then using a conditional to 
	ensure that the list is not completely unchecked. 
***/
function validateActivities() {

	for ( let i = 0; i < activitiesList.length; i++ ) {
		if ( activitiesList[i].checked ) {
			activitiesContainer.style.borderColor = 'green';
			alertActivity.style.display = 'none';
			return true;
		} 
	}
	alertActivity.style.display = 'block';
	alertActivity.textContent = 'Please select at least one event to attend';
	alertActivity.style.color = 'red';
	let label = document.querySelector('.activities legend');
	// What would be the 'else' statement is outside of the loop because if not 
	// placed there, all boxes must be checked for the condition to return true 
	// and we only need one to be checked.
	label.appendChild(alertActivity);
	activitiesContainer.style.borderColor = 'red';
	return false;
}

/***
	This functionis used to determine if the customer is paying by CC and if so,
	validating that the CC number, zip, adn CVV are the proper characters and the
	proper amount of characters
***/

function validatePaymentInfo() {
	// Get the values of the input field to compare to regex
	const creditCardNumber = ccNum.value;
	const zipValue = zip.value;
	const cvvValue = cvv.value;
	// Set the regex values for each field
	const ccRegex = /[0-9]{13,16}/;
	const zipRegex = /[0-9]{5}/;
	const cvvRegex = /[0-9]{3}/;
	// Styling for each alert
	alertCard.style.display = 'block';
	alertCard.textContent = 'Please enter a valid credit card number';
	alertCard.style.color = 'red';
	const cardLabel = document.querySelector('.col-6');
	alertZip.style.display = 'block';
	alertZip.textContent = 'Please enter your 5 digit zip code';
	alertZip.style.color = 'red';
	const zipLabel = document.querySelector('.col-3');
	alertCVV.style.display = 'block';
	alertCVV.textContent = 'Please enter your 3 digit CVV';
	alertCVV.style.color = 'red';
	const cvvLabel = document.querySelectorAll('.col-3')[1];
	alertType.style.display = 'block';
	alertType.textContent = 'Please select a payment type';
	alertType.style.color = 'red';
	const typeLabel = document.querySelector('label[for="payment"]');

	// First checks to see if the customer is paying by CC
	if ( paymentType.value === 'credit card' ) {
		// The conditions below check for every combination of CC, zip, and CVV
		// and display or remove alerts accordingly on submit
		if ( ccRegex.test(creditCardNumber) === true && zipRegex.test(zipValue) === true && cvvRegex.test(cvvValue) === true ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			zip.style.borderColor = 'green';
			alertZip.style.display = 'none';
			cvv.style.borderColor = 'green';
			alertCVV.style.display = 'none';
			alertType.style.display = 'none';
			return true;
		} else if (ccRegex.test(creditCardNumber) === true && zipRegex.test(zipValue) === false && cvvRegex.test(cvvValue) === false ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			cvv.style.borderColor = 'red';
			cvvLabel.appendChild(alertCVV);
			alertType.style.display = 'none';
			return false;
		} else if (ccRegex.test(creditCardNumber) === false && zipRegex.test(zipValue) === true && cvvRegex.test(cvvValue) === false ) {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			zip.style.borderColor = 'green';
			alertZip.style.display = 'none';
			cvv.style.borderColor = 'red';
			cvvLabel.appendChild(alertCVV);
			alertType.style.display = 'none';
			return false;
		} else if (ccRegex.test(creditCardNumber) === false && zipRegex.test(zipValue) === false && cvvRegex.test(cvvValue) === true) {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			cvv.style.borderColor = 'green';
			alertCVV.style.display = 'none';
			alertType.style.display = 'none';
			return false;
		} else if (ccRegex.test(creditCardNumber) === false && zipRegex.test(zipValue) === true && cvvRegex.test(cvvValue) === true ) {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			zip.style.borderColor = 'green';
			alertZip.style.display = 'none';
			cvv.style.borderColor = 'green';
			alertCVV.style.display = 'none';
			alertType.style.display = 'none';
			return false;
		} else if (ccRegex.test(creditCardNumber) === true && zipRegex.test(zipValue) === false && cvvRegex.test(cvvValue) === true ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			cvv.style.borderColor = 'green';
			alertCVV.style.display = 'none';
			alertType.style.display = 'none';
			return false;
		} else if (ccRegex.test(creditCardNumber) === true && zipRegex.test(zipValue) === true && cvvRegex.test(cvvValue) === false ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			zip.style.borderColor = 'green';
			alertZip.style.display = 'none';
			cvv.style.borderColor = 'red';
			alertType.style.display = 'none';
			cvvLabel.appendChild(alertCVV);
			return false;
		} else {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			cvv.style.borderColor = 'red';
			cvvLabel.appendChild(alertCVV);
			alertType.style.display = 'none';
			return false;
		}
	} else if ( paymentType.value === 'select method') {
		// typeLabel.style.text = 'red';
		typeLabel.appendChild(alertType);
		return false;
	} else {
		alertType.style.display = 'none';
		return true
	}
}

/***
	Event listener called on the form when it is submitted
	calls all of the above validation functions to check 
	that every field is filled out properly before submission
	is allowed to go through. 
***/

form.addEventListener('submit', (e) => {
	validateName();
	validateEmail();
	validateActivities();
	validatePaymentInfo();

	// If any of the functions are run and return false, 
	// the form's default behavior (submitting) is stopped
	if ( !validateName() ) {
		e.preventDefault();
	}

	if ( !validateEmail() ) {
		e.preventDefault();
	}

	if ( !validateActivities() ) {
		e.preventDefault();
	}

	if ( !validatePaymentInfo() ) {
		e.preventDefault();
	}

});
	
	