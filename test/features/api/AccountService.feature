Feature: Account Service

@User_001
Scenario: Create Account
When I create an account with valid data
Then I should get response 200
