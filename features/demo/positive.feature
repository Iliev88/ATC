Feature: Submit a message

  Scenario: Verify a user can submit a message in a form
    Given I am on the home page
    When I navigate to contact form
    And I enter "Iliya" in first name text field
    And I enter "Iliev" in last name text field
    And I enter "Bulgaria" in country text field
    And I enter "Hello World!" in message text field
    And I click on Submit button
    Then I can see the form submitted