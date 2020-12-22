@FeatureAutomationTest
Feature: User Story 5
  As a user when browsing the 'Our stores' page,
  I want to drag the map to see a store from West Palm Beach,
  so that I can take a screenshot for future reference.

  Acceptance-Criteria
  User can scroll through the map
  West Palm Beach must be within screenshot

  Scenario: User is able to scroll through the map
    Given I am on the home page
    When I scroll down and select our stores
    Then I am on the Our Stores page


  Scenario:West Palm Beach is within the screenshot
    Given I am on the home page
    When I scroll down and select our stores
    And I click ok on the error message
    And I zoom in on the map
    And I take a screenshot
    Then I can see West Palm Beach within the screenshot

