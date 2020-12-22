$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory5.feature");
formatter.feature({
  "line": 2,
  "name": "User Story 5",
  "description": "As a user when browsing the \u0027Our stores\u0027 page,\nI want to drag the map to see a store from West Palm Beach,\nso that I can take a screenshot for future reference.\n\nAcceptance-Criteria\nUser can scroll through the map\nWest Palm Beach must be within screenshot",
  "id": "user-story-5",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.before({
  "duration": 13056855030,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User is able to scroll through the map",
  "description": "",
  "id": "user-story-5;user-is-able-to-scroll-through-the-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I scroll down and select our stores",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I am on the Our Stores page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 170926676,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iScrollDownAndSelectOurStores()"
});
formatter.result({
  "duration": 1352737613,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iAmOnTheOurStoresPage()"
});
formatter.result({
  "duration": 1505511088,
  "status": "passed"
});
formatter.after({
  "duration": 102057758,
  "status": "passed"
});
formatter.before({
  "duration": 10967028344,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "West Palm Beach is within the screenshot",
  "description": "",
  "id": "user-story-5;west-palm-beach-is-within-the-screenshot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I scroll down and select our stores",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click ok on the error message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I zoom in on the map",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I take a screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see West Palm Beach within the screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 789991,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iScrollDownAndSelectOurStores()"
});
formatter.result({
  "duration": 6454228209,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iClickOkOnTheErrorMessage()"
});
formatter.result({
  "duration": 43072151,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iZoomInOnTheMap()"
});
formatter.result({
  "duration": 110310758,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iTakeAScreenshot()"
});
formatter.result({
  "duration": 770174070,
  "status": "passed"
});
formatter.match({
  "location": "UserStory5Steps.iCanSeeWestPalmBeachWithinTheScreenshot()"
});
formatter.result({
  "duration": 14785,
  "status": "passed"
});
formatter.after({
  "duration": 104234345,
  "status": "passed"
});
});