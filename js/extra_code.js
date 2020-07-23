// This defines the item price as the 'data-cost attribute defined
	// in each checkbox element. Using parseInt turns the string into a
	// numerical value that can be added to the 'total' variable
	const price = parseInt(e.target.getAttribute('data-cost'));
	// This sets the total at zero to start
	let total = 0;

	// This selects the legend element for the activities section
	const legend = document.querySelector('fieldset[class="activities"]');
	// This creates a span element to display the total price
	const displayTotal = document.createElement('SPAN')
	// Here we set the text content so that it displays properly
	displayTotal.textContent = `Total: $${total}`;
	// Appends the displayTotal span to the legend
	legend.appendChild(displayTotal);
	// A for loop is used to run through all occurences of the checkboxes variable