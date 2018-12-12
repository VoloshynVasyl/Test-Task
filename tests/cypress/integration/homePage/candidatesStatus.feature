Feature: Candidate's status of OOS: Crew Application page
  As a user of Crew Application
  I should be able to use candidate's card
  In order to change their status.

  Scenario: Change candidate status from Hired to Interviewing
    Given I open Crew Application page
    And I type "sheffield" into City Filter
    And I click on Submit button
    When I click on left button of candidate in Hired column
    Then I don't see this candidate in Hired column
    And I see this candidate in Interviewing column

  Scenario: Change candidate status from Applied to Interviewing
    Given I open Crew Application page
    And I type "liverpool" into City Filter
    And I click on Submit button
    When I click on right button of candidate in Applied column
    Then I don't see this candidate in Applied column
    And I see this candidate in Interviewing column
