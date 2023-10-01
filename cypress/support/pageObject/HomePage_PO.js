class HomePage_PO {
  constructor() {}


 
  acceptAllBtn() {
    return cy
      .get("#usercentrics-root")
      .shadow() //This shadow element metioned this way not to prevent finding the elements in the 'Cookies popup'
      .find('[data-testid="uc-accept-all-button"]');
  }

  productElement() {
     cy.scrollTo(0, 900);
    return cy.get('[data-qa-id="form-product-slider-03161577-image-button"]', {
      timeout: 10000,
    });
  }

  visitHomePage() {
    //Intercept all requests & prevent displying them in the log for 
    cy.intercept("**", { log: false }).as("requests");
    cy.visit("https://www.shop-apotheke.com/", { failOnStatusCode: false });
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
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).click();
    });
  }
}

export default new HomePage_PO();
