describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should display the loading spinner", () => {
    cy.get("[data-testid='loading']").should("be.visible");
  });

  it("should dispaly products cards grid", () => {
    cy.get("[data-testid='product-card']").should("be.visible");
    cy.get("[data-testid='product-card']").should("have.length", 30);
  });

  it("test te first card ", () => {
    cy.get("img")
      .should("exist")
      .should("have.attr", "src")
      .and(
        "include",
        "https://image-optimizer-reg.production.sephora-asia.net/images/product_images/default_1_Product_840122904943-Rare-Beauty-Soft-Pinch-Liquid-Blush-Believe_a4b49f939fba9156f4323b85594598e3d3d71fc0_1640617036.png"
      );

    cy.get("[data-testid='product-card']")
      .first()
      .contains("Soft Pinch Liquid Blush");

    cy.get("button")
      .should("be.visible")
      .find("svg")
      .should("exist")
      .first()
      .click();
  });

  it("add product to carts and display on cart badge", () => {
    cy.get("[data-testid=add-cart]").click({ multiple: true });

    //cy.get("button")
    cy.get("[data-testid=cart-items-count]")
      .should("be.visible")
      .should("have.text", 30);
    cy.get("[data-testid=cart-items-count]").click();

    cy.get(".text-info").should("be.visible").contains("Subtotal: $136050");
    // .click();
    // Subtotal: $136050
  });
});
