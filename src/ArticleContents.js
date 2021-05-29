/**
 * This code gets text content from Articles, based on WebScience's PageText module
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageText
 */

import * as WebScience from "./WebScience.js"

let initialized = false

/**
  * Start an article contents study.
  * @param {Object} options - A set of options for the study.
  * @param {string[]} [options.domains=[]] - The domains of interest for the study.
  * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
  * @param {Boolean} is_dev_mode - Determines where to store data
  */
export async function startMeasurement ({
  domains = [],
  rally,
  is_dev_mode
}) {
  // If this module has been initialized, don't do it again
  if (initialized) {
    return
  }
  initialized = true

  // Handle onTextParsed event callbacks
  WebScience.Measurements.PageText.onTextParsed.addListener(async (pageData) => {
    // Grab the survey status
    const surveyStatus = await WebScience.Utilities.UserSurvey.getSurveyStatus()

    // If the survey has been completed
    if (surveyStatus == "completed") {
      // Set the type to match other event data schemas
      pageData.type = "WebScience.articleContents"
      // pageID here is used as a unique key for local key/value storage
      const pageId = "WebScience.ArticleContents." + pageData.pageId
      // Grab the User ID and set it in the data
      const userID = await WebScience.Utilities.UserSurvey.getSurveyId()
      pageData.userID = "" + userID
      // We don't need this field -just textContent
      delete pageData.content

      // If its dev mode, save locally.  Otherwise, ping rally
      if (is_dev_mode) {
        browser.storage.local.set({ [pageId]: pageData })
      } else {
        rally.sendPing("articleContent", pageData)
      }
    // If the survey isn't completed, send this message and move on.
    } else {
      console.log("Survey not completed")
    }
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  })
}
