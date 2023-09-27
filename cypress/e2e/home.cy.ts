describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should display the loading spinner", () => {
    cy.get("[data-testid='loading']").should("be.visible");
  });
});
