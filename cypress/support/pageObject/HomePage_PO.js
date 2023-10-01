class HomePage_PO {
  constructor() {}


 
  acceptAllBtn() {
    return cy
      .get("#usercentrics-root")
      .shadow() //This shadow element metioned this way not to prevent finding the elements in the 'Cookies popup'
      .find('[data-testid="uc-accept-all-button"]');
  }

  productElement() {
    return cy.get('[data-qa-id="form-product-slider-03161577-image-button"]', {
      timeout: 10000,
    });
  }

  visitHomePage() {
    cy.viewport(1920, 1080);
    //Intercept all requests & prevent displying them in the log for 
    cy.intercept("**", { log: false }).as("requests");
    cy.visit("https://www.shop-apotheke.com/", { failOnStatusCode: false });
  }

  acceptAllCookies() {
    this.acceptAllBtn().click();
  }

  openProductDetails() {
    this.productElement().scrollIntoView().click();
  }

  openRandomElementDetails() {
    cy.get('[data-qa-id*="image-button"]').then(($elements) => {
      cy.log("The #Products: ",$elements.length);//To log the number of retrieved items from the page
        // Get a random index within the range of elements
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).scrollIntoView().click();
    });
  }
}

export default new HomePage_PO();
