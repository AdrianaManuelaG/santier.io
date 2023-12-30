Feature: Forgot password


Scenario: Forgot password test
Given I open the site page
When I click on 'forgot password'
Then They will ask for email or username and press 'reset password'
Then I should recive a mesage with some helping info
