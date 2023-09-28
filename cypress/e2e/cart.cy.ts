describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/cart");
  });

  it("should show cart page empty", () => {
    cy.get("h1").should("be.visible").contains("Shopping Cart");
    cy.get("p").should("be.visible").contains("Your cart is empty.");
  });

  it("should increase and decrease item amount", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-testid=add-cart]").first().click();
    cy.get("[data-testid=cart-items-count]").click();
    cy.get("[data-testid=cart-btn]").click();

    cy.get("[data-testid=amount]").contains(1);
    cy.get("[data-testid=increase]").should("exist").dblclick();
    cy.get("[data-testid=increase]").click();
    cy.get("[data-testid=amount]").contains(3);
    cy.get("[data-testid=decrease]").should("exist");
    cy.get("[data-testid=decrease]").click();
    cy.get("[data-testid=amount]").contains(2);

    cy.get("[data-testid=remove]").should("exist");
    cy.get("[data-testid=remove]").click();
  });

  it.only("checkout of cart", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-testid=add-cart]").first().click();
    cy.get("[data-testid=cart-items-count]").click();
    cy.get("[data-testid=cart-btn]").click();

    cy.get("[data-testid=checkout]").should("exist");
    cy.get("[data-testid=checkout]").click();

    cy.get("p").should("be.visible").contains("Your cart is empty.");
  });
});
