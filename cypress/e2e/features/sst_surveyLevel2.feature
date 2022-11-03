Feature: SST Survey App for Student Level 2
Scenario: Students Level 2 should be able to answer the SST survey successfully
Given Students Level 2 access the provided survey link
And  Students Level 2 login valid student id
And Students Level 2 have navigated to the onboarding page
When Students Level 2 start answering all survey questions
And Students Level 2 click submit button
Then Students Level 2 should be able to submit answers to the survey
And Students Level 2 be navigated to the Thank you page