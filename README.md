# Idle Index Template

TL;DR
Popup.html displays the screensaver.
Options.html is accessed for adjusting the user preferences.

# About
A Google Chrome extension for displaying artist screensavers.

We recognise there is a wider interest in the use of screensavers as a space for creative artistic expression and investigation.

Idle Index is a series commissioned by Phoenix, working with Leicester-connected artists to explore themes of online/digital idleness.

The series was initially published using dedicated screensaver software. This has been increasingly awkward, and prohibitively costly to use.

Hoping to refresh the engagement with the medium we have developed and published the latest series as a browser extension. It is available for Chrome. Taking the browser page as the element that monitors idleness and activity, opened up new possibilities.

The repository here includes a template version that you can populate and publish with your own artist screensavers.

To download the Phoenix Idle Index extension visit, https://www.phoenix.org.uk/event/the-idle-index/

# How to use this template
If you are building an extension for the first time you might find it useful to look up Google Chrome Extensions Get Started guide, https://developer.chrome.com/extensions/getstarted.

Guidelines for use:
* Download or Fork the project
    * If you are using a lot of media files it is probably easier to store these locally.
* Load the project into Chrome.
    * Go to Window>Extensions
    * Choose Load Unpacked and toggle the extension to On.
    * Open up the extension options using the Extensions icon in the toolbar.
    * Choose some settings and test the template functions as expected.
* Update links in Options.html
    * You should replace the links in Options.html to match your content.
* Update info sections
    * Include any information about your project in the Options.html page or the Popup.html page.
* Add media to the media folder
    * If providing media directly to the user place this in the media folder.
* Alternatively link to a glitch page to enable an iframe instead of default video popup
    * In this template we have included code to enable an embedded Glitch page instead of local media.
    * You'll find this in the helpers.js file.
    * If you're not using this, feel free to comment it out.
    * This is also the place to expand capabilities for other streaming options if needed.
* Update manifest.json
    * Refer to Chrome documentation on Manifest requirements
    * Choose a low version number
    * Make sure any permissions are declared
    * Ensure scripts are linked
    * Make sure icons are correctly linked
* Publish to Chrome store
    * Compress your extension folder.
    * This can be shared directly to other users.
    * You can also publish to the Chrome web store for easier distribution.
    * You will have to pay a one-time developer fee.
    * You will be required to populate a store page and provide a privacy policy.



## Phoenix is supported by Arts Council England
