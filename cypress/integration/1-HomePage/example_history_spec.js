describe("Test example history", () => {
  it("Calculated example appends to history, choosing example from history", () => {
    cy.visit("/");
    cy.get("button").contains("2").click();
    cy.get("button").contains("*").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("2*2");

    cy.get("button").contains("CE").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("51/2");

    cy.get("button").contains("2*2").click();
    cy.get("span").should("contain.text", "2*2");

    cy.get("button").contains("51/2").click();
    cy.get("span").should("contain.text", "51/2");
  });

  it("Click clear history will clear all history", () => {
    cy.visit("/");

    cy.get("button").contains("1").click();
    cy.get("button").contains("*").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();

    cy.get("button").contains("5").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();

    cy.get("button").contains("Clear all").click();
    cy.get("button").not("1*1");
  });
});
