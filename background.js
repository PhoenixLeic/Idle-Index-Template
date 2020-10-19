chrome.storage.sync.get('timer', ({ timer }) => {
	// Parse integer because comes from storage as a string
	// and setDetectionInterval wants an integer
	const time = parseInt(timer)

	// Detect when user is idle (in seconds)
	chrome.idle.setDetectionInterval(time)
})


// Check if state changes to idle
chrome.idle.onStateChanged.addListener(state => {
	console.log('State change: ', state)
	if (state === 'idle') {
		chrome.windows.create({
			type: 'popup',
			url: 'popup.html',
			state: 'fullscreen',
			focused: true
		})
	}
})
