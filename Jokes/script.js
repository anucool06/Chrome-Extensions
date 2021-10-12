fetch('https://icanhazdadjoke.com/slack') 			// get API
	.then(data => data.json())		// converting data as json format
	.then(joke => {				// getting data in joke
		
		const jokeText = joke.attachments[0].text;		// store main joke in var(joketext)
		const jokeElement = document.getElementById('jokeElement');
		jokeElement.innerHTML = jokeText; 		// storing main joke in html element(<p>)

	})