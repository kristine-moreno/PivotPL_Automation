import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sstSurveyPO } from "../../page_objects/sstSurvey_PO";
//import surveyID from '../../fixtures/surveyLink/shortenUrl.json';
const surveyId = require('../../fixtures/surveyLink/shortenUrl.json')
const studentId = require('../../fixtures/studentsData/StudentLevel3.json')

const configs = Cypress.env();

Given('Students Level 3 access the provided survey link', () => { 
    cy.visit(configs.env.sstLogin);
});

When('Students Level 3 login valid student id', () => {
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

            cy.wait(10000) // wait for 5 seconds
            cy.get(sstSurveyPO.greetings).should('be.visible');
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
            cy.wait(5000) // wait for 2 seconds
            cy.get(sstSurveyPO.startSurveyBtn).click({force: true});

            //survey questions
            cy.wait(5000) // wait for 5 seconds
            cy.get(sstSurveyPO.sst_question_1).should('be.visible').contains("This teacher's use of technology helps me learn");
            cy.get(sstSurveyPO.radio_q1_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_2).should('be.visible').contains("This teacher gives me choices about the work I do");
            cy.get(sstSurveyPO.radio_q2_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_3).should('be.visible').contains("This teacher helps me focus on learning");
            cy.get(sstSurveyPO.radio_q3_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_4).should('be.visible').contains("I know how I am supposed to behave in class");
            cy.get(sstSurveyPO.radio_q4_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_5).should('be.visible').contains("This teacher explains things in a way I can understand");
            cy.get(sstSurveyPO.radio_q5_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_6).should('be.visible').contains("This teacher gives clear instructions");
            cy.get(sstSurveyPO.radio_q6_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_7).should('be.visible').contains("In this class, I often work with other students");
            cy.get(sstSurveyPO.radio_q7_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_8).should('be.visible').contains("This teacher makes learning interesting");
            cy.get(sstSurveyPO.radio_q8_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_9).should('be.visible').contains("This teacher makes connections to what we have already learned");
            cy.get(sstSurveyPO.radio_q9_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_10).should('be.visible').contains("This teacher knows a lot about the topics in this class");
            cy.get(sstSurveyPO.radio_q10_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_11).should('be.visible').contains("This teacher asks questions that make me think deeply");
            cy.get(sstSurveyPO.radio_q11_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_12).should('be.visible').contains("This teacher helps me to set goals for my learning");
            cy.get(sstSurveyPO.radio_q12_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_13).should('be.visible').contains("This teacher gives me time to think when I need it");
            cy.get(sstSurveyPO.radio_q13_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_14).should('be.visible').contains("I know how well I am doing in this class");
            cy.get(sstSurveyPO.radio_q14_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_15).should('be.visible').contains("This teacher encourages me to think instead of just telling me the answers");
            cy.get(sstSurveyPO.radio_q15_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_16).should('be.visible').contains("This teacher's feedback helps me improve");
            cy.get(sstSurveyPO.radio_q16_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_17).should('be.visible').contains("This teacher respects me for who I am");
            cy.get(sstSurveyPO.radio_q17_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_18).should('be.visible').contains("This teacher connects their teaching to my life");
            cy.get(sstSurveyPO.radio_q18_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_19).should('be.visible').contains("This teacher believes I can succeed in school");
            cy.get(sstSurveyPO.radio_q19_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_20).should('be.visible').contains("I feel comfortable asking this teacher for help");
            cy.get(sstSurveyPO.radio_q20_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_21).should('be.visible').contains("This teacher cares about my wellbeing");
            cy.get(sstSurveyPO.radio_q21_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_22).should('be.visible').contains("This teacher helps me when I am upset");
            cy.get(sstSurveyPO.radio_q22_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_23).should('be.visible').contains("This teacher asks me to share my ideas about what we are learning");
            cy.get(sstSurveyPO.radio_q23_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_24).should('be.visible').contains("This teacher supports me if I am confused");
            cy.get(sstSurveyPO.radio_q24_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.sst_question_25).should('be.visible').contains("This teacher makes changes in response to my feedback");
            cy.get(sstSurveyPO.radio_q25_response).children()
            .eq(Math.floor(Math.random() * 6))
            .click({force: true});
            cy.get(sstSurveyPO.submitBtn).click({force: true});          
            
            cy.wait(5000) // wait for 5 seconds
            //Thank you
            cy.get(sstSurveyPO.thankyouTitle).should('be.visible').contains("You are finished!");
            cy.get(sstSurveyPO.thankyouSubtitle).should('be.visible').contains("Thank you for your feedback.");
            cy.get(sstSurveyPO.thankyouIcon).should('be.visible');
            cy.get(sstSurveyPO.thankyouFooter).should('be.visible').contains("Your teacher will let you know what happens next");            

            cy.wait(5000) // wait for 5 seconds
            //Logout
            cy.get(sstSurveyPO.logoutBtn,{timeout:10000}).click();
            //cy.get(sstSurveyPO.modal_Logout,{timeout:10000}).click();
        studId++;
        })
        sid++;
    })
})

When(' Students Level 3 have navigated to the onboarding page',()=>{
    cy.log('I have navigated to the onboarding page')
})

When('Students Level 3 start answering all survey questions', () => { 
    cy.log('I start answering all survey questions')
})

When('Students Level 3 click submit button',()=>{
    cy.log('I click submit button')
})

When('Students Level 3 should be able to submit answers to the survey', () => {
    cy.log('I should be able to submit my answers to the survey')
})

Then('Students Level 3 be navigated to the Thank you page',()=>{
    cy.log('be navigated to the Thank you page')
})
