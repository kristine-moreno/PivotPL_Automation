import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sstSurveyPO } from "../../page_objects/sstSurvey_PO";
//import surveyID from '../../fixtures/surveyLink/shortenUrl.json';
const surveyId = require('../../fixtures/surveyLink/shortenUrl.json')
const studentId = require('../../fixtures/studentsData/Student.json')

const configs = Cypress.env();

Given('I navigate the provided survey link', () => { 
    cy.visit(configs.env.sstLogin);
});

When('I login my valid student id', () => {
    let sid = 0;
    surveyId.forEach(testSurvey=>{
        cy.visit(surveyId[sid].surveyLink);
        //cy.get(sstSurveyPO.surveyID).type(surveyId[sid].surveyLink);
        let studId = 0;
        studentId.forEach(testStudent=>{
            cy.get(sstSurveyPO.pivotLogo).should('be.visible');
            cy.get(sstSurveyPO.sstLabel).should('be.visible').contains('Student Survey on Teaching');
            cy.get(sstSurveyPO.sstSubLabel).should('be.visible').contains('Welcome to your student survey on teaching');
            cy.get(sstSurveyPO.studentID,{timeout:5000}).type(studentId[studId].Students);
            //login
            cy.get(sstSurveyPO.sstLoginBtn).click();

            //logout
           cy.get(sstSurveyPO.logoutBtn).click();
        studId++;
        })
        sid++;
    })
})

When('I have navigated to the onboarding page',()=>{
    cy.log('I have navigated to the onboarding page')
})

When('I start answering all survey questions', () => { 
    cy.log('I start answering all survey questions')
})

When('I click submit button',()=>{
    cy.log('I click submit button')
})

When('I should be able to submit my answers to the survey', () => {
    cy.log('I should be able to submit my answers to the survey')
})

Then('be navigated to the Thank you page',()=>{
    cy.log('be navigated to the Thank you page')
})
