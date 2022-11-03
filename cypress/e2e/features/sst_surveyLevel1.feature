Feature: SST Survey App for Student Level 1
Scenario: Students Level 1 should be able to answer the SST survey successfully
Given Students Level 1 access the provided survey link 
And  Students Level 1 login valid student id
And Students Level 1 have navigated to the onboarding page
When Students Level 1 start answering all survey questions
And Students Level 1 click submit button
Then Students Level 1 should be able to submit answers to the survey
And Students Level 1 be navigated to the Thank you page