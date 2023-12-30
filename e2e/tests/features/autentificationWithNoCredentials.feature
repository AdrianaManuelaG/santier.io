Feature: Login whit no credentials

Scenario: Login without credentials
Given I navigate the home page
When I click on login button 
Then An error alert should apear 