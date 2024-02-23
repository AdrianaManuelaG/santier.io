Feature: New construction site 

Scenario: Adding new construction site
    Given I navigate to the page
    When I access my account 
    Then I click on 'santiere' label
    When I click on 'adaugare santier' and fill all the empty fields
    Then I click on submit buton and i recive an confirmation

