Feature: Add material

Scenario: Add new material
    Given I open the page and I logIN into the application
    When I click on the 'Materials' button and fill the details
    When I click the 'Add' button
    Then I should see a confirmation message
    