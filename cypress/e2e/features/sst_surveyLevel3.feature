Feature: SST Survey App for Student Level 3
Scenario: Students Level 3 should be able to answer the SST survey successfully
Given Students Level 3 access the provided survey link 
And  Students Level 3 login valid student id
And Students Level 3 have navigated to the onboarding page
When Students Level 3 start answering all survey questions
And Students Level 3 click submit button
Then Students Level 3 should be able to submit answers to the survey
And Students Level 3 be navigated to the Thank you page