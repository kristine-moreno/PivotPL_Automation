Feature: Survey Not Available
Scenario: Survey Not Available page should be display when the survey is not open yet
Given I access to the provided scheduled survey link
When I login my valid survey_id and student_id
And the survey is not open yet
Then I should be navigated to the Survey Not Available page
And all elements should be properly displayed
And I should be able to log out my account