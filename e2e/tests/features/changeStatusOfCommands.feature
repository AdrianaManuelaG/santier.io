Feature:Change status of commands workflow

Scenario: Change command status from ongoing to completed
    Given I go to my app page
    When I login application
    Then I click on 'change status in ongoing' at Casa Gula and ok button
    Then I click on 'change status in completed' and ok button
    Then I see a message that confirm that the command is completed