// Retrieve saved preference for screensaver
chrome.storage.sync.get('filmChoice', ({ filmChoice }) => {
  // If the value chosen includes .html, treat as iFrame
  if (filmChoice.includes('.glitch.me')) {
    setupIframe(filmChoice)
  } else {
    setVideoSrc(filmChoice)
  }
})

function setupIframe(iframeUrl) {
  // Get container
  const container = document.querySelector('.container')
  // Create iframe dom element
  const iframe = document.createElement('iframe')
  // Add iframe class to it for styling
  iframe.classList.add('iframe')
  // Give the iframe some attributes
  iframe.src = iframeUrl
  iframe.width = 720
  iframe.height = 500
  // Add iframe to dom
  container.appendChild(iframe)
}

function setVideoSrc(src) {
  // Get video element
  const video = document.querySelector('video')

  // Set src on video element
  video.setAttribute('src', src)

  // Play
  video.play()
}

// Overlay related below
function onInfoClicked() {
  showInfo()
}

function onBackgroundClicked() {
  hideInfo()
}

function onCloseClicked() {
  hideInfo()
}

function showInfo() {
  document.querySelector('.overlay').classList.add('overlay--active')
}

function hideInfo() {
  document.querySelector('.overlay').classList.remove('overlay--active')
  resumePlaybackSpeed()
}

function createEventListeners() {
  document.querySelector('.information-button').addEventListener('click', onInfoClicked)
  document.querySelector('.overlay-background').addEventListener('click', onBackgroundClicked)
  document.querySelector('.overlay-close').addEventListener('click', onCloseClicked)
}

function init() {
  createEventListeners()
}

window.onload = () => {
  init()
}
