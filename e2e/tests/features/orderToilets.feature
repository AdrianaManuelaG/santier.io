Feature: Order toilets

Scenario: Order toilets in site
Given I go to the page and sign in 
When I go to 'santiere'label and choose 'Casa GULA'
Then I click on red button 'Cerere' and 'toalete'
Then I choose 'Livrare toalete pe santier' and çlick on 'f.urgent'
Then I click on 'trimitere solicitare' and i recive the confirmation
