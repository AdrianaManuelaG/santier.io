Feature: Add new provider

Scenario: Adding a new provider
    Given I go to the page
    When I login in the application
    Then I click on 'furnizori' label 
    When I click 'adauga un nou furnizor' and fill the fields
    Then I click 'adauga' button and i should recive a confirmation 

