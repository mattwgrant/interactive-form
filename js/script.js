function focus() {
	/*** 
		this function selects the input with the ID of name
		and puts the focus there so that the user can start 
		typing their name as soon as the page loads, without
		having to manually go to the field
	***/
	document.getElementById('name').focus();
}
focus();

/***
	This function hides the HTML input field that will display
	if the customer selects 'other' as a job role.
***/

function hideOtherInput() {
	// this variable selects the first fieldset element
	let fieldSet = document.querySelector('fieldset');
	// this element selects the text input
	let otherInput = document.querySelector('#other-title');
	/***
	this calls remove child on the fieldSet variable
	and removes the otherInput so that it does not display if JS
	is working but allows the field to display if JS is mnot working
	***/
	fieldSet.removeChild(otherInput);
}
// This calls it so that the function runs automatically to hide the element
hideOtherInput();

function showOtherInput() {

}


/***
	This function appends a field to enter more information about
	the job title the user is interested in if they select other.
***/
// function jobRole() {
	// this variable selects the element with the id of title
	// let title = document.querySelector('#title');
	/***
		If the title they choose is other, it will append a text
		input field for the user to enter more information in to,.
	***/
// 	if ( 'option[value="other"]' )
// 		let otherInput = document.createElement('INPUT');
// 		otherInput.id = 'other-title';
// 		otherInput.type = 'text';
// 		title.appendChild
// }

/***
	if the user selection is other, append a text input below the 
***/
	function createInput() {
		let title = document.querySelector('fieldset');
		let otherInput = document.createElement('INPUT');
		otherInput.id = 'other-title';
		otherInput.type = 'text';
		otherInput.placeholder = 'Your Job Role';
		title.appendChild(otherInput);
	};
	createInput();