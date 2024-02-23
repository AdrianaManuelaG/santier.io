Feature: Change company dates

Scenario: Change company details
    Given I open the page of app
    When I login in my acount
    Then I go to 'companie' label 
    Then I change tha name of company
    Then I click on 'modifica' button and i recive the confirmation