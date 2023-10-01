class HomePage_PO {
  constructor() {}

  // Elements' Locators methods

  shadowElement() {
    return cy.get("#usercentrics-root").shadow();
  }
  acceptAllBtn() {
    return cy
      .get("#usercentrics-root")
      .shadow()
      .find('[data-testid="uc-accept-all-button"]');
  }

  productElement() {
     cy.scrollTo(0, 900);
    return cy.get('[data-qa-id="form-product-slider-03161577-image-button"]', {
      timeout: 10000,
    });
  }

  visitHomePage() {
    // // Intercept all  requests
    // cy.intercept("**").as("requests");
    cy.intercept("**", { log: false }).as("requests");
    cy.visit("https://www.shop-apotheke.com/", { failOnStatusCode: false });
    // Wait for all request types requests to complete
    // cy.wait("@requests", { timeout: 10000 });
  }

  acceptAllCookies() {
    this.acceptAllBtn().click();
  }

  openProductDetails() {
    this.productElement().click();
  }

  openRandomElementDetails() {
    cy.scrollTo(0, 900);
    cy.get('[data-qa-id*="image-button"]').then(($elements) => {
        // Get a random index within the range of elements
        const randomIndex = Math.floor(Math.random() * $elements.length);
        // Select the random element and perform actions on it
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).click(); // For example, click the random element
    });
  }
}

export default new HomePage_PO();
