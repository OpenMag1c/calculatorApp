describe("Test navigation", () => {
  it("Clicking navbar links navigates to a new urls", () => {
    cy.visit("/");
    cy.contains("Settings").click();
    cy.url().should("include", "/settings");
    cy.contains("Home").click();
    cy.url().should("not.include", "/settings");
  });
});
