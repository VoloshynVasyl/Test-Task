Feature: Candidate's status of OOS: Crew Application page
  As a user of Crew Application
  I should be able to use candidate's card
  In order to change their status.

  Scenario: Candidate in Hired column
    Given I open Crew Application page
    Then I see right button is absent for card in Hired column

  Scenario: Candidate in Applied column
    Given I open Crew Application page
    Then I see left button is absent for card in Applied column

  Scenario: Candidate in Hired column
    Given I open Crew Application page
    Then I see photo for card in Hired column
    And I see name for card in Hired column
    And I see city name for card in Hired column
