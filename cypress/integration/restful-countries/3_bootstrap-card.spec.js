/// <reference types="cypress" />

context("Querying", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.get() - Bootstrap Cards", () => {
    // validates bootstrap class row
    cy.get(".row").should("class", "row").should("be.visible");

    // validates bootstrap class row & col classes
    cy.get(".row ")
      .first()
      .children(".col-lg-4.col-sm-12")
      .should("be.visible");

    // validate the bootstrap class card
    cy.get(".card").should("class", "card").should("be.visible");

    // validate the bootstrap class card, card-header
    cy.get(".card .card-header")
      .should("class", "card-header")
      .should("be.visible");

    // validate the bootstrap class card, card-body
    cy.get(".card .card-body")
      .should("class", "card-body")
      .should("be.visible");

    // validate image tag with src attribute and image type of .svg
    cy.get(".card-body")
      .find("img")
      .should("have.attr", "src")
      .should("include", ".svg");

    // takes screenshot of the first card
    cy.get(".card")
      .first()
      .scrollIntoView()
      .screenshot(`First Card Screenshot-${Cypress.config().baseUrl}`);

    // validates the button & has class .btn
    // and contains the text = Click for Weather
    // and if button is visible, does the first click
    cy.get(".card-body button")
      .should("have.class", "btn")
      .should("contain.text", "Click for Weather")
      .should("be.visible")
      .first()
      .click()
      .screenshot();

    // // to get all the array og=f the buttons
    // // if required uncomment the block before testing
    // cy.get(".card-body button")
    //   .should("have.class", "btn")
    //   .should("contain.text", "Click for Weather")
    //   .should("be.visible")
    //   .each(($el, index, $list) => {
    //     cy.wrap($el).click();
    //   });
  });
});
