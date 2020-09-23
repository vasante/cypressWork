
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('My First Cypress Test', function() {
  it('Visits the ToolsQA Demo Page and check the menu items', function() {
  //Visit the Demo QA Website
  cy.visit("https://demoqa.com/");
  
 // Clicking on Widget Menu Item
  cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click();
  
  cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();

  cy.get("#userName").type("sfsfsf");
 
})
})