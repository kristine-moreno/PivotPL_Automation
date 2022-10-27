import { Given, When, And, But, Then } from "@badeball/cypress-cucumber-preprocessor";
import { wbloginPO } from "../../page_objects/wbLogin_PO";
import { loginSelectionPO } from "../../page_objects/loginSelection_PO";
import { surveyNotAvailablePO } from "../../page_objects/surveyNotAvailable_PO";
const surveyId = require('../../fixtures/surveyLink/survey_not_available.json')
const studentId = require('../../fixtures/studentsData/Student.json')

const configs = Cypress.env();

Given('I access the provided WB survey link', () => { 
    cy.visit(configs.env.wbLogin);
})

When('I login my valid WB survey_id and student_id', () => {
    //checking login elements
    cy.get(wbloginPO.pivotLogo).should('be.visible');
    cy.get(wbloginPO.wbLabel).should('be.visible').contains('Wellbeing for Learning');
    cy.get(wbloginPO.wbSubLabel).should('be.visible').contains('Welcome to your weekly wellbeing check-in.');

    let sid = 0;
    surveyId.forEach(testSurvey=>{
        //entering survey id
        let studId = 0;
        studentId.forEach(testStudent=>{
            cy.get(wbloginPO.surveyID).type(surveyId[sid].survey);
            //entering student id and clicking login button
            cy.get(wbloginPO.studentID,{timeout:5000}).type(studentId[studId].Students);
            cy.get(wbloginPO.wbLoginBtn,{timeout:5000}).click();
            

            //checking Not Available page
            cy.log("And the survey is not open yet");
            cy.get(surveyNotAvailablePO.notAvailablePivotLogo,{timeout:5000}).should('be.visible');
            cy.get(surveyNotAvailablePO.wereSorryLabel,{timeout:5000}).should('be.visible');
            cy.get(surveyNotAvailablePO.notOpenLabel,{timeout:5000}).should('be.visible');
            cy.get(surveyNotAvailablePO.centerImage,{timeout:5000}).should('be.visible');
            cy.get(surveyNotAvailablePO.notifOpenLabel,{timeout:5000}).should('be.visible');
            cy.get(surveyNotAvailablePO.notAvailableLogout,{timeout:5000}).should('be.visible');
            cy.log("Elements are available")

            //click logout button
            cy.get(surveyNotAvailablePO.notAvailableLogout,{timeout:5000}).click();
            cy.log("Then I should be navigated to the Survey Not Available page");
            cy.log("And all elements should be properly displayed");

            //checking Login selection elements
            cy.log("And I should be able to log out my account");
            cy.get(loginSelectionPO.loginSelectpivotLogo,{timeout:5000}).should('be.visible');
            cy.get(loginSelectionPO.makeSelectionLabel,{timeout:5000}).should('be.visible');
            cy.get(loginSelectionPO.selectWellbeingButton,{timeout:5000}).should('be.visible');
            cy.get(loginSelectionPO.selectSSTButton,{timeout:5000}).should('be.visible');

            //clicking SST button
            cy.get(loginSelectionPO.selectWellbeingButton).click();
        studId++;
        })
        sid++;
    })
})
