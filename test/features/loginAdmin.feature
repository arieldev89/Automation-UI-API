Feature: Login Admin

@Login_001
Scenario: Login to the admin dashboard
    Given I navigate to the admin dashboard
    When I login with valid credentials
    Then I should see account list