/**
 * Content script to extract advertisement info from a page
 * @module WebScience.Measurements.content-scripts.page-ads
 */
// Function encapsulation to maintain unique variable scope for each content script

const pageAds = function () {
  const pageManager = window.webScience.pageManager
  /**
       * @constant
       * How often (in milliseconds) to check for ads
       */
  const updateInterval = 1500
  /**
       * @constant
       * If there are no updates after this many retries, stop looking
       */
  const retryAttempts = 3

  /**
       * Send page content to a background script to store
       * @param {string} document - HTML doc for href and rgeferrer
       * @param {Object} ads - The advertisment info
       * @returns {void}
       */
  function sendAdsToBackground(document, ads) {
    browser.runtime.sendMessage({
      type: "WebScience.advertisements",
      pageId: pageManager.pageId,
      url: document.location.href,
      body: {
        clientHeight: document.body.clientHeight,
        clientWidth: document.body.clientWidth
      },
      ads: ads
    })
    data_sent = true
  }
  // Ads - the current list of advertisements
  let ads = []
  // Ad length -  a running list of the number of ads
  // This is used for retry logic
  const ad_length = []

  // parsed and data_sent are variables to see if the doc has been parsed yet
  // or if the ad data has been sent
  //
  // These variables are used to determine how to behave when a user
  // navigates away from a page quickly
  let parsed = false
  let data_sent = false
  // Function: parseDocumentForAds
  // This function searches the document using the CSS selectors
  // It only grabs DIVs and IFRAMES with non-zero cleintHeight and clientWidth info
  //
  // Returns: void
  // Saves final data to global ads variable
  function parseDocumentForAds(evt) {
    // Grab all elements using CSS selectors, and filter out only DIVs and Iframes
    const current_ads = []
    // For every ad selector
    // NOTE - `adCssSelectors` is already in-scope
    // eslint-disable-next-line no-undef
    for (let i = 0; i < adCssSelectors.length; ++i) {
      try {
        // eslint-disable-next-line no-undef
        const ad = document.querySelectorAll(adCssSelectors[i])
        // If the selector returns results
        if (ad.length !== 0) {
          // For every result
          for (let j = 0; j < ad.length; ++j) {
            const this_ad = ad[j]

            // If it has nonzero clientHeight and clientWidth
            if (this_ad.clientHeight != 0 && this_ad.clientWidth != 0) {
              // Grab the ad
              current_ads.push(this_ad)
            }
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    // Go through list of ads, and pull out only elements that are not parents
    const children = []
    // For every current ad
    for (let i = 0; i < current_ads.length; ++i) {
      let is_parent = false
      const this_ad = current_ads[i]
      // For every other current ad
      for (let j = 0; j < current_ads.length; ++j) {
        const ad_to_compare = current_ads[j]
        if (ad_to_compare !== this_ad) {
          // Check if its a parent
          if (this_ad.contains(ad_to_compare)) {
            is_parent = true
          }
        }
      }
      // If its not a parent of another ad on the list, keep it
      if (!is_parent) {
        children.push(this_ad)
      }
    }

    // Go through child elements, and pull data
    const ad_data = []
    for (let i = 0; i < children.length; ++i) {
      const this_ad = children[i]
      ad_data.push({
        id: this_ad.id,
        tag: this_ad.tagName,
        clientHeight: this_ad.clientHeight,
        clientWidth: this_ad.clientWidth,
        height: this_ad.height,
        width: this_ad.width
      })
    }

    // Grab unique ads
    const unique_ads = ad_data.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i)

    // Set the global vars for ads and ad_length
    ads = unique_ads
    ad_length.push(unique_ads.length)

    // The doc has been parsed once, so set parsed
    if (parsed == false) {
      parsed = true
    }
  }

  // Function: findAds
  // This function wraps around parseDocumentForAds
  // and sets up the retry logic
  function findAds(evt) {
    function intervalFunc(evt) {
      // Parse the doc
      parseDocumentForAds(evt)
      // if we've retried retryAttempt times
      // And the last retryAttempt lengths are the same
      // Stop the script and send the data.
      if (ad_length.length > retryAttempts &&
        ad_length.slice(Math.max(ad_length.length - retryAttempts, 1)).every((val, ind, arr) => val === arr[0])) {
        clearInterval(intervalId)
        sendAdsToBackground(document, ads)
      }
    }
    // Otherwise, set it up to retry
    const intervalId = setInterval(intervalFunc, updateInterval)
  }

  // Function: unload
  // This function is called when on the unload event
  // If the user navigates away, and the page hasnt been parsed
  // or the data hasn't been sent
  // do so
  function unload(evt) {
    if (parsed == false) {
      parseDocumentForAds(evt)
    }
    if (data_sent == false) {
      sendAdsToBackground(document, ads)
    }
  }

  // Set the event handlers to start finding ads on load
  // and to catch the data at last attempt on unload
  window.addEventListener("load", findAds, false)
  window.addEventListener("unload", unload, false)
}
// Wait for pageManager load
// if ("pageManager" in window){
//    pageAds();
// }
// else {
//    if(!("pageManagerHasLoaded" in window)){
//        window.pageManagerHasLoaded = [];
//    }
//    window.pageManagerHasLoaded.push(pageAds);
// }

// Wait for pageManager load
if (("webScience" in window) && ("pageManager" in window.webScience)) {
  pageAds()
} else {
  if (!("pageManagerHasLoaded" in window)) {
    window.pageManagerHasLoaded = []
  }
  window.pageManagerHasLoaded.push(pageAds)
}
