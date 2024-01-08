Feature: New registration

Scenario: Register new client
    Given I open the page
    When I click on register button
    Then I fill up the fields from the page
    When I click on 'register' green button  
    Then A pop-up with confirmation should apear 