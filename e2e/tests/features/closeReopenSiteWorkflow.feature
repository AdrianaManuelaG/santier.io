Feature: Close-reopen site

Scenario: Close and reopen site
Given I navigate to app page
When I sign in
Then I go to site label and choose the house
Then I click on settings near the name of the house
When I click on 'inchide santier' button and 'ok'
Then I click 're-deschide santier' button and 'ok'

