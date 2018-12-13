Feature: Filters of OOS: Crew Application page
  As a user of Crew Application
  I should be able to use filters
  In order to filter list of candidates.

  Scenario: Using of Name filter - positive scenario
    Given I open Crew Application page
    When I type "lloyd" into Name Filter
    And I click on Submit button
    Then I see only one person on the board

  Scenario: Using of Name filter - negative scenario
    Given I open Crew Application page
    When I type "sheffield" into Name Filter
    And I click on Submit button
    Then I don't see anybody on the board

  Scenario: Using of City filter - positive scenario
    Given I open Crew Application page
    When I type "sheffield" into City Filter
    And I click on Submit button
    Then I see only one person on the board

  Scenario: Using of City filter - negative scenario
    Given I open Crew Application page
    When I type "lloyd" into City Filter
    And I click on Submit button
    Then I don't see anybody on the board

  Scenario: Clear button
    Given I open Crew Application page
    When I type "lloyd" into Name Filter
    And I click on Submit button
    And I click on Clear button
    Then I see everybody on the board
