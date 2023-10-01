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

  getProductTitleText(){
    return cy.getElementText('[data-qa-id="product-title"]');
  }

  getProductPriceText(){
    return cy.getElementText('[data-qa-id="currentOfferPrice"]');
  }

  selectProductAmount(quantity){
    cy.get('#quantity').click();
    cy.get('[data-qa-id="product-quantity-select-option"]').contains(quantity).click();
    this.addToShoppingCart();
    cy.get('[data-clientside-hook="Menubar__cart-badge"]')
    .invoke("text")
    .should("eq", quantity);
  }

  verifyTotalItemPrice(quantity){
    let priceText;
    cy.get('#quantity').click();
    cy.get('[data-qa-id="product-quantity-select-option"]').contains(quantity).click();

    const count = parseInt(quantity,10);
    this.getProductPriceText().as('itemPrice').then((itemPrice) => {

       const priceNumberOlny = itemPrice.toString().replace(/[^\d,]/g, '');
       const price = parseFloat(priceNumberOlny.replace(',', '.')); // Converts "," to "." as a float
       const totalItemPrice = count * price;
       const itemPriceText = totalItemPrice.toString().replace('.',',').replace('.00','');
   
       this.addToShoppingCart();
       ShoppingCart_PO.navigateToCart();

       cy.get('[data-qa-id="cart-entry-totalPrice"]')
       .invoke("text").should(($Totalprice) => {
        expect($Totalprice).to.contain(itemPriceText);
       });
    });

  }
}

export default new ProductDetails_PO();
