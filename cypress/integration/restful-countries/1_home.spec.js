/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.window() - get the global window object", () => {
    cy.window()
      .should("have.property", "top")
      .screenshot(`Home page - ${Cypress.config().baseUrl}/`);
  });

  // checks for the charset UTF-8
  it("cy.document() - get the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  // //matches with regex
  it("cy.title() -2- get the title", () => {
    cy.title().should("match", /[A-Za-z]\w+/);
  });

  // // specific title
  // it("cy.title() -1- get the title", () => {
  //   cy.title().should("include", "Countries");
  // });

  // it("cy.title() -2- get the title", () => {
  //   cy.title().should("include", "Restful countries");
  // });
});
