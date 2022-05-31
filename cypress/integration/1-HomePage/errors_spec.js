describe("Test errors", () => {
  it("Example with division by zero", () => {
    cy.visit("/");
    cy.get("button").contains("2").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.contains("Smth is wrong, You've got Infinity");
  });

  it("Example with too much symbols", () => {
    cy.visit("/");
    for (let i = 0; i < 16; i += 1) {
      cy.get("button").contains("1").click();
    }
    cy.contains("Too much symbols!");
  });

  it("Example is wrong expression", () => {
    cy.visit("/");
    cy.get("button").contains("2").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("=").click();
    cy.contains("Smth is wrong, You've got NaN");
  });
});
