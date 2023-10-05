import ShoppingCart_PO from "./ShoppingCart_PO";
class ProductDetails_PO {
  constructor() {
    this.titleText;
    this.titleElement;
  }

  verifyCartEmpty() {
    cy.get('[data-clientside-hook="Menubar__cart-badge"]')
      .invoke("text")
      .should("eq", "0");
  }

  addToShoppingCart() {
    cy.get('[data-qa-id="add-to-cart-button"]').click();
    cy.get('[data-clientside-hook="Menubar__cart-badge"]')
      .invoke("text")
      .should("not.eq", "0");
  }

  getProductTitleText() {
    return cy.getElementText('[data-qa-id="product-title"]');
  }

  getProductPriceText() {
    return cy.getElementText('[data-qa-id="currentOfferPrice"]');
  }

  selectProductAmount(quantity) {
    cy.get("#quantity").click();
    cy.get('[data-qa-id="product-quantity-select-option"]')
      .contains(quantity)
      .click();
    this.addToShoppingCart();
    cy.get('[data-clientside-hook="Menubar__cart-badge"]')
      .invoke("text")
      .should("eq", quantity);
  }

  verifyTotalItemPrice(quantity) {
    let priceText;
    cy.get("#quantity").click();
    cy.get('[data-qa-id="product-quantity-select-option"]')
      .contains(quantity)
      .click();
    const count = parseInt(quantity, 10); //convert the quantity provided as an inputto the method to number in order to use for calculation
    this.getProductPriceText()
      .then((itemPrice) => {
        const priceNumberOlny = itemPrice.toString().replace(/[^\d,]/g, ""); //Remove any non numeric characters
        const price = parseFloat(priceNumberOlny.replace(",", ".")); // Converts "," to "." as a float in order to be able to use it for calculation
        const totalItemPrice = count * price; //Calculate the total amount through multipying the quantity with the item price
        //revert the format changes back in order to be able to compare it to the price (from the cart page) as text & also remove any zeros in the 2 decimal locations (to make it easier)
        const itemPriceText = totalItemPrice
          .toString()
          .replace(".", ",")
          .replace(".00", "");
        this.addToShoppingCart();
        ShoppingCart_PO.navigateToCart();
        //Compare the part calculated earlier to the total item price from teh cart page
        cy.get('[data-qa-id="cart-entry-totalPrice"]')
          .invoke("text")
          .should(($Totalprice) => {
            expect($Totalprice).to.contain(itemPriceText);
          });
      });
  }
}

export default new ProductDetails_PO();
