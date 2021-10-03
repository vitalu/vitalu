// /// <reference types="Cypress" />
// import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
// import toolsQAPage from "../../../../support/pageObjects/ToolsQA"


// const ToolsQAPage = new toolsQAPage()
// //test steps 
// Given('I open shop tools QA page', () => {
//     cy.visit('http://shop.demoqa.com/my-account/');
// })
// And('I enter usernaem and password', (dataTable) => {

//     ToolsQAPage.username().type(dataTable.rawTable[1][0])
//     ToolsQAPage.password().type(dataTable.rawTable[1][1])
//     ToolsQAPage.login_button().click();
// })
// // Then('I validate My Account page and Logout',() =>{
// //     cy.get('.woocommerce-MyAccount-navigation').should('be.visible')
// //     cy.get("li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout'] a").should('have.text','Logout')
// // })
// // When('I click Logout',()=>{
// //     cy.get("li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout'] a").click();
// // })
// // Then('I validate login page',()=>{
// // cy.get("div[class='u-column1 col-1'] h2").should('have.text','Login')
// // })
// Given('I click search for T-shirt', () => {

//     ToolsQAPage.search().click()
//     Cypress.config('defaultCommandTimeout', 8000)
//     cy.get('.form-control').type('T Shirt').type('{enter}')
// })
// And('I validate catlog', () => {
//     cy.get('.noo-container-catalog').should('be.visible')
// })
// Then('I select size', () => {
//     cy.get('.pull-right > :nth-child(3) > .noo-woo-filter').select('34').should('have.value', '109')
//     cy.wait(2000)
// })
// And('I select color', () => {
//     cy.get('.pull-right > :nth-child(2) > .noo-woo-filter').select('Black').should('have.value', '59')
// })

// Then('I select tshirt which contains tag sales', () => {
//     cy.get('.onsale').click();
// })