/*** 
	This function selects the input with the ID of name
	and puts the focus there so that the user can start 
	typing their name as soon as the page loads, without
	having to manually go to the field
***/

function focus() {
	document.getElementById('name').focus();
};
focus();

/***
	This function hides the HTML input field that will display
	if the customer selects 'other' as a job role.
***/

function hideInput() {
	// This variable selects the first fieldset element
	let fieldSet = document.querySelector('fieldset');
	// This element selects the text input
	let input = document.querySelector('#other-title');
	/***
		This calls remove child on the fieldSet variable
		and removes the otherInput so that it does not display if JS
		is working but allows the field to display if JS is not working
	***/
	fieldSet.removeChild(input);
};
// This calls it so that the function runs automatically to hide the element
hideInput();


// /***
// 	This function creates the text input field for the 'Other'
// 	job role
// ***/

// function createInput() {
// 	// this variable selects the first fieldset element
// 	let title = document.querySelector('fieldset');
// 	// this creates the text input for the other job role
// 	let otherInput = document.createElement('INPUT');
// 	// here I assign it an ID of other title
// 	otherInput.id = 'other-title';
// 	// this sets its type to text
// 	otherInput.type = 'text';
// 	// this gives it a placeholder value
// 	otherInput.placeholder = 'Your Job Role';
// 	// this appends it to the end of the fieldset taht was selected
// 	title.appendChild(otherInput);
// };


/***
	This function calls createInput if the 'Other' job role is 
	selected
***/

function showInput() {
	let select = document.querySelector('select');
	let other = document.querySelector('option[value="other"]');
	let fieldSet = document.querySelector('fieldset');
	let input = document.querySelector('#other-title');
	select.addEventListener('change', (e) => {
		if ( fieldSet.option.value === 'other') {
			fieldSet.appendChild(input);
		} else {
			hideInput();
		}

	})
};






	
	