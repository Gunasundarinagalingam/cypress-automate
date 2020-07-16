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

  it("cy.viewport() - set the viewport size and dimension", () => {
    cy.get(".container").should("be.visible");
    cy.viewport(320, 480);

    // the navbar should have collapse since our screen is smaller
    cy.get(".container").should("be.visible");
    cy.viewport(2999, 2999);

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)

    cy.viewport("macbook-15");
    cy.wait(200);

    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
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
