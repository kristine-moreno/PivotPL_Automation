import { Given, When, And, But, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sstSurveyPO } from "../../page_objects/sstSurvey_PO";
import { loginSelectionPO } from "../../page_objects/loginSelection_PO";
import { schedSurvey } from "../../page_objects/schedSurvey_PO";
const surveyId = require('../../fixtures/surveyLink/survey_scheduled.json')
const studentId = require('../../fixtures/studentsData/closeSurveyStudent.json')

const configs = Cypress.env();

Given('I access to the provided survey link', () => { 
    cy.visit(configs.env.sstLogin);
})

When('I login my valid survey_id and student_id', () => {
    //checking login elements
    cy.get(sstSurveyPO.pivotLogo).should('be.visible');
    cy.get(sstSurveyPO.sstLabel).should('be.visible').contains('Student Survey on Teaching');
    cy.get(sstSurveyPO.sstSubLabel).should('be.visible').contains('Welcome to your student survey on teaching');
    cy.get(sstSurveyPO.sstTalkLabel).should('be.visible').contains('Please talk to your teacher if you have forgotten your Student ID.');

    let sid = 0;
    surveyId.forEach(testSurvey=>{
        //entering survey id
        let studId = 0;
        studentId.forEach(testStudent=>{
            cy.get(sstSurveyPO.surveyID).type(surveyId[sid].survey);
            //entering student id and clicking login button
            cy.get(sstSurveyPO.studentID,{timeout:5000}).type(studentId[studId].Students);
            cy.get(sstSurveyPO.sstLoginBtn,{timeout:5000}).click();
            

            //checking Not Available page
            cy.log("And the survey is not open yet");
            cy.get(schedSurvey.notAvailablePivotLogo,{timeout:5000}).should('be.visible');

            cy.get(schedSurvey.wereSorryLabel,{timeout:5000}).should('be.visible').contains("We're sorry");;
            cy.get(schedSurvey.notOpenLabel,{timeout:5000}).should('be.visible').contains("This survey is not open yet.");
            cy.get(schedSurvey.centerImage,{timeout:5000}).should('be.visible');
            cy.get(schedSurvey.notifOpenLabel,{timeout:5000}).should('be.visible').contains("Your teacher will let you know when it opens.");
            cy.get(schedSurvey.notAvailableLogout,{timeout:5000}).should('be.visible');
            cy.log("Elements are available")

            //click logout button
            cy.get(schedSurvey.notAvailableLogout,{timeout:5000}).contains("Log out").click();
            cy.log("Then I should be navigated to the Survey Not Available page");
            cy.log("And all elements should be properly displayed");

            //checking Login selection elements
            cy.log("And I should be able to log out my account");
            cy.get(loginSelectionPO.loginSelectpivotLogo,{timeout:5000}).should('be.visible');
            cy.get(loginSelectionPO.makeSelectionLabel,{timeout:5000}).should('be.visible').contains("Make your selection");

            cy.get(loginSelectionPO.selectWellbeingButton,{timeout:5000}).should('be.visible');
            cy.get(loginSelectionPO.selectSSTButton,{timeout:5000}).should('be.visible');

            //clicking SST button
            cy.get(loginSelectionPO.selectSSTButton).click();
        studId++;
        })
        sid++;
    })
})
