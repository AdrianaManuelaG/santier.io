Feature: Order materials

Scenario: Order materials
    Given I go to the app
    When I login in the account
    Then I go to the 'santiere' label
    When I click on 'Casa2'
    Then I click the red button 'Cerere' and 'Cerere materiale'
    Then I fill all the important fields
    When I choose delivery in one day
    Then I click on 'Comanda' button and should see a confirmation 
