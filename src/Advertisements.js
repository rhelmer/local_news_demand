/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

import * as WebScience from "./WebScience.js"

let initialized = false

/**
 * Start an advertisements study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
 * @param {Boolean} isDevMode - Changes storage location based on whether this is dev mode or not
 */
export async function startMeasurement ({
  domains = [],
  rally,
  isDevMode
}) {
  // If this module has already been initialized, don't do it again
  if (initialized) {
    return
  }
  initialized = true
  // Make sure the page manager has initialized.  This is used for the PageID
  await WebScience.Utilities.PageManager.initialize()

  // Build the URL matching set for content scripts
  const contentScriptMatches = WebScience.Utilities.Matching.domainsToMatchPatterns(domains, true)

  // Register the content script for measuring advertisement info
  // The CSS selectors file is needed to find ads on the page
  await browser.contentScripts.register({
    matches: contentScriptMatches,
    js: [
      {
        file: "/src/ad_css_selectors.js"
      },
      {
        file: "/src/content-scripts/page-ads.js"
      }
    ],
    runAt: "document_start"
  })

  // Handle advertisement callbacks
  WebScience.Utilities.Messaging.onMessage.addListener(async (adInfo, sender, sendResponse) => {
    // Get the survey status
    const surveyStatus = await WebScience.Utilities.UserSurvey.getSurveyStatus()

    // If the survey is complete
    if (surveyStatus == "completed") {
      // pageID is a unique ID for the browser key/value storage
      const pageId = "WebScience.Advertisements." + adInfo.pageId
      // Normalize the URL
      adInfo.url = WebScience.Utilities.Matching.normalizeUrl(sender.url)
      // Set TabID
      adInfo.tabId = sender.tab.id
      // Grab the userID from the survey adn set it in the JSON data
      const userID = await WebScience.Utilities.UserSurvey.getSurveyId()
      adInfo.userID = "" + userID

      // If its dev mode, store locally.  Otherwise, ping rally.
      if (isDevMode) {
        browser.storage.local.set({ [pageId]: adInfo })
      } else {
        rally.sendPing("advertisement", adInfo)
      }
    // If the survey isn't completed, just log this message and move on
    } else {
      console.log("Survey not completed")
    }
  }, {
    type: "WebScience.advertisements",
    schema: {
      pageId: "string",
      type: "string",
      url: "string",
      ads: "object",
      body: "object"
    }
  }
  )
}
