describe("Test localization", () => {
  it("Change language settings change localization", () => {
    cy.visit("/settings");
    cy.contains("Calculator App");
    cy.contains("Home");
    cy.contains("Settings");

    cy.contains("English").click();
    cy.contains("Русский").click();
    cy.contains("Калькулятор");
    cy.contains("Главная");
    cy.contains("Настройки");
  });
});
