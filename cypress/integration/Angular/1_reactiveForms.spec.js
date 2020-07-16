/// <reference types="cypress" />

context("Angular Reactive Form Task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.window() - get the global window object", () => {
    cy.window()
      .should("have.property", "top")
      .screenshot(`Screenshot-1 - ${Cypress.config().baseUrl}/`);
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
  //   cy.title().should("include", "Reactive Forms");
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

  it("Reactive Form controls validation", () => {
    cy.get(".btn").should("not.be.enabled");
    cy.get("input[formcontrolname=name]").type("Guvi");
    cy.get("input[formcontrolname=email]").type("reach@guvi.in");
    cy.get("input[formcontrolname=password]").type("password");
    cy.get("input[formcontrolname=confirm_password]").type("password");

    cy.get("select[formcontrolname=country]").select("India", { force: true });
    cy.get("select[formcontrolname=state]").select("Tamil Nadu", {
      force: true,
    });
    cy.get("select[formcontrolname=city]").select("Chennai", { force: true });

    cy.get("input[formcontrolname=addressLine1]").type("IIT-M Research Park");
    cy.get("input[formcontrolname=addressLine2]").type("Tharamani");
    cy.get("input[formcontrolname=zipCode]").type("600113");

    cy.get("input[formcontrolname=gender]").first().check();
    cy.get("input[formcontrolname=marital_status]").first().check();

    cy.get("input[formcontrolname=favFood]").type("Good Food");
    cy.get("input[formcontrolname=favColor]").type("Green");

    const st = cy.stub();
    cy.on("window:alert", st);
    cy.get(".btn")
      .should("be.enabled")
      .contains("Submit")
      .click()
      .then((el) => {
        expect(st.getCall(0)).to.be.calledWith("Form Submitted successfully");
      });
    cy.window()
      .should("have.property", "top")
      .screenshot(`Screenshot-2- ${Cypress.config().baseUrl}`);
  });
});
