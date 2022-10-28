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

            //survey questions
            cy.wait(5000) // wait for 2 seconds
            cy.get(sstSurveyPO.question_response).check("1");
            cy.wait(5000) // wait for 2 seconds
            cy.get(sstSurveyPO.sst_question_1).should('be.visible').contains("My teacher's use of technology helps me learn");
            cy.get(sstSurveyPO.sst_question_2).should('be.visible').contains("My teacher gives me choices about the work I do");
            cy.get(sstSurveyPO.sst_question_3).should('be.visible').contains("My teacher helps me focus on learning");
            cy.get(sstSurveyPO.sst_question_4).should('be.visible').contains("I know how I am supposed to behave in class");
            cy.get(sstSurveyPO.sst_question_5).should('be.visible').contains("My teacher explains things in a way I can understand");
            cy.get(sstSurveyPO.sst_question_6).should('be.visible').contains("My teacher gives clear instructions");
            cy.get(sstSurveyPO.sst_question_7).should('be.visible').contains("In this class, I often work with other students");
            cy.get(sstSurveyPO.sst_question_8).should('be.visible').contains("My teacher makes learning interesting");
            cy.get(sstSurveyPO.sst_question_9).should('be.visible').contains("My teacher makes connections to what we have already learned");
            cy.get(sstSurveyPO.sst_question_10).should('be.visible').contains("My teacher knows a lot about the topics in this class");
            cy.get(sstSurveyPO.sst_question_11).should('be.visible').contains("My teacher asks questions that make me think deeply");
            cy.get(sstSurveyPO.sst_question_12).should('be.visible').contains("My teacher helps me to set goals for my learning");
            cy.get(sstSurveyPO.sst_question_13).should('be.visible').contains("My teacher gives me time to think when I need it");
            cy.get(sstSurveyPO.sst_question_14).should('be.visible').contains("I know how well I am doing in this class");
            cy.get(sstSurveyPO.sst_question_15).should('be.visible').contains("My teacher encourages me to think instead of just telling me the answers");
            cy.get(sstSurveyPO.sst_question_16).should('be.visible').contains("My teacher's feedback helps me improve");
            cy.get(sstSurveyPO.sst_question_17).should('be.visible').contains("My teacher respects me for who I am");
            cy.get(sstSurveyPO.sst_question_18).should('be.visible').contains("My teacher connects their teaching to my life");
            cy.get(sstSurveyPO.sst_question_19).should('be.visible').contains("My teacher believes I can succeed in school");
            cy.get(sstSurveyPO.sst_question_20).should('be.visible').contains("I feel comfortable asking my teacher for help");
            cy.get(sstSurveyPO.sst_question_21).should('be.visible').contains("My teacher cares about my wellbeing");
            cy.get(sstSurveyPO.sst_question_22).should('be.visible').contains("My teacher helps me when I am upset");
            cy.get(sstSurveyPO.sst_question_23).should('be.visible').contains("My teacher asks me to share my ideas about what we are learning");
            cy.get(sstSurveyPO.sst_question_24).should('be.visible').contains("My teacher supports me if I am confused");
            cy.get(sstSurveyPO.sst_question_25).should('be.visible').contains("My teacher makes changes in response to my feedback");
            cy.get(sstSurveyPO.Q1_RadioGroup).should('be.visible');
           
            //cy.get(sstSurveyPO.question_response).check("1"); //Strongly Disagree
            //cy.get(sstSurveyPO.question_response).check("2"); //Disagree
            //cy.get(sstSurveyPO.question_response).check("3"); //Slightly Disagree
            //cy.get(sstSurveyPO.question_response).check("4"); //Slightly Agree
            //cy.get(sstSurveyPO.question_response).check("5"); //Agree
            //cy.get(sstSurveyPO.question_response).check("6"); //Strongly Agree

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
