@Login
Feature: Login
	As a testing developer
	I want to test if the login page works correctly

Background:
		When I open 'login' page
		Then I expect that element "username" not contains any text
		And I expect that element "password" not contains any text
@Error
Scenario: It should not be possible to login without Username
		When I enter "username" "<username>"
		And I clear the "username" field
		And I enter "password" "<password>"
		And I clear the "username" field
		And I click the "login" button
		Then I expect message to "be displayed"
		And I expect message to "contain" "Username is required"
@Error
Scenario: It should not be possible to login without Password
		When I enter "username" "<username>"
		And I enter "password" "<password>"
		And I clear the "password" field
		And I click the "login" button
		Then I expect message to "be displayed"
		And I expect message to "contain" "Password is required"

@Success
Scenario: It should be possible to login into "Swag Labs"
		When I enter "username" "<username>"
		And I enter "password" "<password>"
		And I click the "login" button
		Then I expect url to "contain" "inventory.html"
		And I expect title to "be equal to" "Swag Labs"
		
Examples:
			| username                 | password      |
			| standard_user            | secret_sauce  |
			| problem_user             | secret_sauce  |
			| performance_glitch_user  | secret_sauce  |
			| error_user		       | secret_sauce  |
			| visual_user		       | secret_sauce  |
