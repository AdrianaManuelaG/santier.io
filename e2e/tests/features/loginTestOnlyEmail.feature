Feature: Login with email only

Scenario: Login test with email only
Given I navigate to app
When I fill the email field
Then I click on 'login' button
Then I should recive an error that i have to complete password field