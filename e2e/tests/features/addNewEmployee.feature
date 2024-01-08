Feature: Add new employee

Scenario: Adding a new employee
Given I login in the app
When I click on the 'angajati' label
Then I fill all the fields from the page
When I click on 'Adauga angajat'
Then I recive a message with approvment