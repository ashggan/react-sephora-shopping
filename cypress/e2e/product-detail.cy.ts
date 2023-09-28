describe("product view page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get("[data-testid='product-card']").first().find("figure").click();
  });
  //

  it("should test the image carousel", () => {
    cy.get(".carousel").should("exist");

    cy.get(".carousel-item").should("be.visible");

    cy.get(".carousel-item")
      .its("length")
      .then((itemCount) => {
        expect(itemCount).to.be.greaterThan(1);

        // cy.get(".carousel-item").eq(1).trigger("keydown", { keyCode: 39 });
      });
  });
  it("display the first product view page", () => {
    cy.location("pathname").should(
      "eq",
      "/31326/rare-beauty-soft-pinch-liquid-blush"
    );

    cy.get("[data-testid='product-details' ]").should("be.visible");
    cy.get("[data-testid='product-details' ]").contains("benefits");
    cy.get("h1").should("be.visible");
    cy.get("p").should("be.visible");
  });

  it("Add to cart button and works", () => {
    cy.get("button").should("exist").contains("Add to Cart");
    cy.get("button").click();
    cy.get("[data-testid=cart-items-count]").should("have.text", 1);
  });
});
