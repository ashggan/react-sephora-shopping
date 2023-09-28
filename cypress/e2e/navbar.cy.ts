describe("NavBar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should display title link", () => {
    cy.get("[data-testid='title']").should("be.visible").contains("Style");
  });

  it("The cart  badge have 0 items", () => {
    cy.get("[data-testid=cart-items-count]")
      .should("be.visible")
      .should("have.text", 0);
  });

  it('Should open cart details and" view cart" button', () => {
    cy.get("[data-testid=cart-items-count]").click();
    cy.get("[data-testid=cart-btn]")
      .should("be.visible")
      .contains("View cart")
      .click();
  });

  it("title link should return to home page", () => {
    cy.get("[data-testid='title']").click();
    cy.location("pathname").should("eq", "/");
  });
});
