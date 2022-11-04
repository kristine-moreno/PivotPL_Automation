Feature: SST Survey App

Background:
Given I have access  Student Survey on Teaching login page

Scenario: Students Level 1 should be able to answer the SST survey successfully
When Students Level 1 login valid student id
And Students Level 1 have navigated to the onboarding page
And Students Level 1 start answering all survey questions
And Students Level 1 click submit button
And Students Level 1 should be able to submit answers to the survey
Then Students Level 1 be navigated to the Thank you page

Scenario: Students Level 2 should be able to answer the SST survey successfully
When Students Level 2 login valid student id
And Students Level 2 have navigated to the onboarding page
And Students Level 2 start answering all survey questions
And Students Level 2 click submit button
And Students Level 2 should be able to submit answers to the survey
Then Students Level 2 be navigated to the Thank you page

Scenario: Students Level 3 should be able to answer the SST survey successfully
When Students Level 3 login valid student id
And Students Level 3 have navigated to the onboarding page
And Students Level 3 start answering all survey questions
And Students Level 3 click submit button
And Students Level 3 should be able to submit answers to the survey
Then Students Level 3 be navigated to the Thank you page