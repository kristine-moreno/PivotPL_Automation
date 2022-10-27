Feature: WB Survey App

Background:
Given I have access Wellbeing Student Survey login page

Scenario: Student should not be able to access survey that is currently Scheduled
When I enter a survey id that is currently have scheduled status
And enter my valid student id
Then I should be navigated to the Survey not open yet page

Scenario: Student should not be able to access survey that is already closed
When I enter a survey id that has been closed
And enter my valid student id
Then I should be navigated to the Survey is close page

Scenario: Survey will not be accesible for those student that has already responded
When I enter a survey id which I have already responded
And enter my valid student id
Then I should be navigated to the Thank you page

Scenario: Student should be able to answer Wellbeing Survey Baseline
Given I enter valid survey id for wellbeing baseline that is currently open
And enter my valid student id
And I have navigated to the onboarding page
When I start answering all survey questions
And I click submit button
Then I should be able to submit my answers to the survey
And be navigated to the Thank you page