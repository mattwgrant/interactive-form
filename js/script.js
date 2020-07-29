// Global variables
const title = document.querySelector('#title');
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const checkboxes = document.querySelectorAll('.activities input');
const paymentType = document.querySelector('#payment');
// This creates a span element to display the total price
const displayTotal = document.createElement('SPAN');
// This sets the total at zero to start
let total = 0;

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
	to select 'Select Theme' from the tshirt drop down
***/

window.addEventListener('load', () => { 
	document.querySelector('#other-title').hidden = true;
	document.querySelector('#design option').setAttribute('disabled', true);
});

/***
	This hides all payment options except for credit card on load. It also
	sets the Select Payment Method drop down option to disabled so that it
	cannot be chosen.
***/

window.addEventListener('load', () => {
	document.querySelector('#paypal').hidden = true;
	document.querySelector('#bitcoin').hidden = true;
	document.querySelector('option[value="select method"]').setAttribute('disabled', true);
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

	// Hides option to choose Select Theme from drop down once menu is
	// clicked on and only displays actual shirt designs
	let shirtOption = document.querySelector('#design option');
	shirtOption.hidden = true;
	

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

	const selected = e.target;
	const clickedTime = selected.getAttribute('data-day-and-time');
	
	
	// This defines the item price as the 'data-cost attribute defined
	// in each checkbox element. Using parseInt turns the string into a
	// numerical value that can be added to the 'total' variable
	const price = parseInt(selected.getAttribute('data-cost'));
	
	
	
	console.log(selected);	

	
	
	
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

	if ( paymentType.value === 'credit card') {
		document.querySelector('#credit-card').hidden = false;
		document.querySelector('#paypal').hidden = true;
		document.querySelector('#bitcoin').hidden = true;
	} else if (paymentType.value === 'paypal') {
		document.querySelector('#credit-card').hidden = true;
		document.querySelector('#paypal').hidden = false;
		document.querySelector('#bitcoin').hidden = true;
	} else if (paymentType.value === 'bitcoin') {
		document.querySelector('#credit-card').hidden = true;
		document.querySelector('#paypal').hidden = true;
		document.querySelector('#bitcoin').hidden = false;
	}	else {
		
	}

})
	
	