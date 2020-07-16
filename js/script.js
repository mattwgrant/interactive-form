// Global variables
const title = document.querySelector('#title');
const design = document.querySelector('#design');

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

design.addEventListener('change', () => {
	// if design.option.value = 'Select Theme'
	// then color should display a message that says 'Please select a T-shirt theme';
	// otherwise is should display the drop down options from color
	// if it is displaying a color, it should only display the colors
	// available for the specific shirt design
	const color = document.querySelector('#color');
	if ( design.value === 'Select Theme' ) {

	} else {

	}
}); 







	
	