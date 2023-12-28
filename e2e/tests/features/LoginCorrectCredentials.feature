Feature: Login test with correct credentials

Scenario: Login test
Given I open the home page
When I fill the login fields
Then I click login button
Then I should be redirected on the home page of the site