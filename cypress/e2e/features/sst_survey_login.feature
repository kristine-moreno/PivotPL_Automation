Feature: SST Survey App Login
Scenario: Students should be able to answer the SST survey successfully
Given I navigate the provided survey link
And I login my valid student id
And I have navigated to the onboarding page
When I start answering all survey questions
And I click submit button
Then I should be able to submit my answers to the survey
And be navigated to the Thank you page