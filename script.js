function takeInput(inputSel) {
	var input;
	if (inputSel) {
		input = document.querySelector(inputSel)
		if (input) {
			return input.value
		}
	} else {
		return console.log("Input box selector not available!!")
	}
}

function matchingGivenRegex() {
	var textAreaConent = takeInput("textarea")
	var regex = takeInput('input[name="regex"]')
	let match = textAreaConent.match(`${regex}`)
	if (match) {
		console.log(match)
		document.querySelector('.blank').innerText = match
	} else {
		console.log("Something's wrong!!")
		console.log(match)
	}
}

