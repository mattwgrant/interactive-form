
if ( paymentType.value === 'credit card' ) {
		// If they are, it checks that the CC number is valid
		if ( ccRegex.test(creditCardNumber) === true ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			return true
		} else {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			return false;
		}
				
		// If valid it checks the zip
		if ( zipRegex.test(zipValue) === true ) {
			zip.style.borderColor = 'green';
			zipLabel.style.display = 'none';
			return true;
		} else {
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			return false;
		}

		
		// Finally it checks the CVV and if that is good, returns true
		// and is validated
		if ( cvvRegex.test(cvvValue) === true ) {
			cvv.style.borderColor = 'green';
			cvvLabel.style.display = 'none';
			return true;
			// Below are the alerts if any of the above 3 are false
		} else {
			cvv.style.borderColor = 'red';
			cvvLabel.appendChild(alertCVV);
			return false;
		}
	} else if (paymentType.value === 'select method') {
		typeLabel.style.text = 'red';
		typeLabel.appendChild(alertType);
		return false;
	} else {
		return true;
	}

	function totalCost() {
	// This defines the item price as the 'data-cost attribute defined
	// in each checkbox element. Using parseInt turns the string into a
	// numerical value that can be added to the 'total' variable
	// const price = parseInt(checkboxes.getAttribute('data-cost'));
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
	for ( let i = 0; i < checkboxes.length; i++ ) {
		const price = parseInt(checkboxes[i].getAttribute('data-cost'));
		if ( checkboxes[i].checked ) {
			total += price;
		} else {
			total -= price;
		}
	}
	return total;
}

clickedTime !== typeOfCheckbox || clickedTime === null && 

const selectTheme = document.querySelectorAll('#design option')[0];
	selectTheme.style.display = 'none';
	// trying to figure out how to hide drop down options on change event


if ( paymentType.value === 'credit card' ) {
		// If they are, it checks that the CC number is valid
		if ( ccRegex.test(creditCardNumber) === true && zipRegex.test(zipValue) === true && cvvRegex.test(cvvValue) === true ) {
			ccNum.style.borderColor = 'green';
			alertCard.style.display = 'none';
			return true
		} else {
			ccNum.style.borderColor = 'red';
			cardLabel.appendChild(alertCard);
			return false;
		}
				
		// If valid it checks the zip
		if ( zipRegex.test(zipValue) === true ) {
			zip.style.borderColor = 'green';
			zipLabel.style.display = 'none';
			return true;
		} else {
			zip.style.borderColor = 'red';
			zipLabel.appendChild(alertZip);
			return false;
		}

		
		// Finally it checks the CVV and if that is good, returns true
		// and is validated
		if ( cvvRegex.test(cvvValue) === true ) {
			cvv.style.borderColor = 'green';
			cvvLabel.style.display = 'none';
			return true;
			// Below are the alerts if any of the above 3 are false
		} else {
			cvv.style.borderColor = 'red';
			cvvLabel.appendChild(alertCVV);
			return false;
		}
	} else if (paymentType.value === 'select method') {
		typeLabel.style.text = 'red';
		typeLabel.appendChild(alertType);
		return false;
	} else {
		return true;
	}