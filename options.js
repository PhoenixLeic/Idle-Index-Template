// Display message to show options have been saved
function displayStatus(message) {
  // Update status to let user know options were saved.
  const status = document.getElementById('status')
  status.textContent = message
  setTimeout(function () {
    status.textContent = ''
  }, 1000)
}

// Saves options to chrome.storage
function saveOptions(e) {
  // This will prevent the typical submission of
  // the form, and just run this code instead.
  e.preventDefault()

  const filmChoice = document.getElementById('filmChoice').value
  const timer = document.getElementById('timer').value

  chrome.storage.sync.set({ filmChoice, timer }, () => {
    displayStatus('Options saved')
  })
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get(items => {
    document.getElementById('filmChoice').value = items.filmChoice
    document.getElementById('timer').value = items.timer
  })
}


function createEventListeners() {
  document.getElementById('save').addEventListener('click', e => saveOptions(e))
}

function init() {
  restoreOptions()
  createEventListeners()
}

window.onload = function () {
  init()
}
