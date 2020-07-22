// Global variables
const title = document.querySelector('#title');
const design = document.querySelector('#design');
let color = document.querySelector('#color');
let checkboxes = document.querySelectorAll('.activities input');

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
	be hidden when the page loads
***/

window.addEventListener('load', () => { 
	document.querySelector('#other-title').hidden = true;
});

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

	// If the value of design matches 'js puns', the inner HTML changes to 
	// display the color for that shirt design and will not display any other
	// color options. The different colors are all placed together by appending 
	// each one to the next

	if ( design.value === 'js puns' ) {
		color.innerHTML = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>`;
		color.innerHTML += `<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>`;
		color.innerHTML += `<option value="gold">Gold (JS Puns shirt only)</option>`;

		// This works the same way as the previous option but with the 'heart js' shirt

	} else if ( design.value === 'heart js' ) {
		color.innerHTML = `<option value="tomato">Tomato (I &#9829; JS shirt only)</option>`;
		color.innerHTML += `<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> `;
		color.innerHTML += `<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`;
		
		// Determines if the value is equal to 'Select Theme' and if it is,
		// changes the inner HTML of the drop down to read 'Please select a T-shirt 
		// theme'. Though I have this set on page load, if the customer changes back to
		// this option it needs to be able to change again

	} else {
		color.innerHTML = '<option>Please select a T-shirt theme</option>';
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

	let selected = e.target;
	let clickedTime = selected.getAttribute('data-day-and-time');

	// A for loop is used to run through all occurences of the checkboxes variable

	for ( let i = 0; i < checkboxes.length; i++ ) {

		// This gets the 'data-day-and-time' of all elements that are defined
		// in the checkboxes variable

		let typeOfCheckbox = checkboxes[i].getAttribute('data-day-and-time'); 

		// This compares the clicked or selected element's 'data-day-and-time'
		// with all others on the list and disables any checkbox that 
		// matches the sslected checkbox's 'data-day-and-time' and leaves
		// all other boxes able to be selected as long as they do not conflict.
		// If an element is unselected then it allows the other ones that were 
		// conficting to now be chosen.

		if ( clickedTime === typeOfCheckbox && selected !== checkboxes[i] ) {
			if ( selected.checked ) {
				checkboxes[i].disabled = true;
				totalCost();
			} else {
				checkboxes[i].disabled = false;
			}
		}


		// console.log(price.innerHTML);
		// fieldset.appendChild(price);
		// fieldset.appendChild('price');
		// price.innerHTML = `<p>Total: ${price}</p>`;
	}
});


function totalCost() {
	let legend = document.querySelectorAll('legend')[2];
	let price = checkboxes.getAttribute('data-cost');
	let total = document.createElement('p');
	total.innerHTML = `Total: $${price}`;
	legend.appendChild(total);
}

	
	