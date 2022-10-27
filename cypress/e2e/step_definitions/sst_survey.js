import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sstSurveyPO } from "../../page_objects/sstSurvey_PO";
//import surveyID from '../../fixtures/surveyLink/shortenUrl.json';
const surveyId = require('../../fixtures/surveyLink/shortenUrl.json')
const studentId = require('../../fixtures/studentsData/Student.json')

const configs = Cypress.env();

Given('I access the provided survey link', () => { 
    cy.visit(configs.env.sstLogin);
});

When('I login my valid survey id and student id', () => {
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
            cy.get(sstSurveyPO.sstLoginBtn,{timeout:5000}).click();

            //onboarding
            cy.get(sstSurveyPO.greetings,{timeout:10000}).should('be.visible');
            cy.get(sstSurveyPO.feedbackSubtext,{timeout:5000}).should('be.visible');
            cy.get(sstSurveyPO.subtext,{timeout:5000}).should('be.visible');
            cy.get(sstSurveyPO.imgSlides,{timeout:5000}).should('be.visible');
            cy.get(sstSurveyPO.sliderRightArrow,{timeout:10000}).trigger("click")
            cy.get(sstSurveyPO.imgSlides,{timeout:5000}).should('be.visible')
            cy.wait(2000) // wait for 2 seconds
            cy.get(sstSurveyPO.sliderRightArrow2,{timeout:20000}).trigger("click")
            cy.get(sstSurveyPO.imgSlides).should('be.visible');
            cy.wait(2000) // wait for 2 seconds
            cy.get(sstSurveyPO.sliderRightArrow2).trigger("click")
            cy.get(sstSurveyPO.imgSlides).should('be.visible');
            cy.wait(2000) // wait for 2 seconds
            cy.get(sstSurveyPO.sliderRightArrow2,{timeout:20000}).trigger("click")
            cy.get(sstSurveyPO.imgSlides).should('be.visible');
            cy.wait(2000) // wait for 2 seconds
            cy.get(sstSurveyPO.sliderRightArrow2,{timeout:20000}).trigger("click")
            cy.wait(2000) // wait for 2 seconds
            cy.get(sstSurveyPO.startSurveyBtn,{timeout:5000}).click();

            //logout
            cy.get(sstSurveyPO.logoutBtn,{timeout:10000}).click();
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
