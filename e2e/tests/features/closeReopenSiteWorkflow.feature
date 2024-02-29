Feature: Close-reopen site

Scenario: Close and reopen site
Given I navigate to app page
When I sign in
Then I go to site label and choose the house
Then I click on settings in the right of the page
When I click on 'inchide santier' button and 'inchide'
Then I click 're-deschide santier' button and 're-deschide'

