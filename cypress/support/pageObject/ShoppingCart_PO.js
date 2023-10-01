class ShoppingCart_PO {
  constructor() {}

  navigateToCart(){
    cy.get('[data-qa-id="cart-button"]').click();
  }

  getProductTitleTextFromCart() {
    return cy.getElementText(".o-ProductInfo__title");
  }

  getProductPriceTextFromCart() {
    return cy.getElementText('[data-qa-id="cart-entry-totalPrice"]');
  }

}

export default new ShoppingCart_PO();
