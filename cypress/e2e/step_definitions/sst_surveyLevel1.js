import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sstSurveyPO } from "../../page_objects/sstSurvey_PO";
//import surveyID from '../../fixtures/surveyLink/shortenUrl.json';
const surveyId = require('../../fixtures/surveyLink/shortenUrl.json')
const studentId = require('../../fixtures/studentsData/StudentLevel1.json')

const configs = Cypress.env();

Given('I have access  Student Survey on Teaching login page', () => { 
    cy.visit(configs.env.sstLogin);
});

When('Students Level 1 login valid student id', () => {
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


            //SST Survey Level 1            
            cy.wait(5000) // wait for 5 seconds
            cy.get(sstSurveyPO.student_name,{timeout:10000}).should('be.visible');
            
          
            //survey questions
            cy.wait(5000) // wait for 5 seconds
            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher help you focus on learning?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher show you how to behave in class?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});
            
            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher make learning exciting?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Do you set goals that help you learn?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher give you time to think when you need it?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher show you how to make your work better?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does it feel okay to ask your teacher for help?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher care about you?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.nextBtn).contains('Next').click({force: true});

            cy.get(sstSurveyPO.level1_sst_question).should('be.visible').contains("Does your teacher ask you to share your ideas?");
            cy.get(sstSurveyPO.level1_sst_response).children()
            .eq(Math.floor(Math.random() * 3))
            .click({force: true});
            cy.get(sstSurveyPO.submitSurvey).contains('Submit').click({force: true});
        
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

