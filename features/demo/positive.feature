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

  Scenario: Verify a user can submit a message in a form with another country
    Given I am on the home page
    When I navigate to contact form
    And I enter "Jack" in first name text field
    And I enter "Jones" in last name text field
    And I enter "USA" in country text field
    And I enter "You've got a problem" in message text field
    And I click on Submit button
    Then I can see the form submitted