import HomePage_PO from "../support/pageObject/HomePage_PO";
import ProductDetails_PO from "../support/pageObject/ProductDetails_PO";
import ShoppingCart_PO from "../support/pageObject/ShoppingCart_PO";

///<reference types="Cypress" />

describe("Testing the behavior of the ShoppingCart Page", () => {
  let productInfo;
  beforeEach(() => {
    cy.fixture("productInfo").then((data) => {
      productInfo = data;
    });
  });

  it('Adding random product to the "ShoppingCart"', () => {
    HomePage_PO.visitHomePage();
    HomePage_PO.acceptAllCookies();
    ProductDetails_PO.verifyCartEmpty();
    HomePage_PO.openRandomElementDetails();
    // HomePage_PO.openProductDetails();
    ProductDetails_PO.addToShoppingCart();

  });

  it("Verifyng the product info display in the ShoppingCart page", () => {
    HomePage_PO.visitHomePage();
    HomePage_PO.acceptAllCookies();
    HomePage_PO.openRandomElementDetails();
    // HomePage_PO.openProductDetails();
    ProductDetails_PO.getProductTitleText().then((text1) => {
      ProductDetails_PO.getProductPriceText().then((text3) => {
        ProductDetails_PO.addToShoppingCart();
        ShoppingCart_PO.navigateToCart();
        ShoppingCart_PO.getProductTitleTextFromCart().then((text2) => {
          ShoppingCart_PO.getProductPriceTextFromCart().then((text4) => {
            expect(text1).to.equal(text2);
            expect(text3).to.equal(text4);
          });
        });
      });
    });
  });

  it("Select Quantity of the product before adding to the Shopping Cart", () => {
    HomePage_PO.visitHomePage();
    HomePage_PO.acceptAllCookies();
    ProductDetails_PO.verifyCartEmpty();
    HomePage_PO.openProductDetails();

    const { amount } = productInfo;
    ProductDetails_PO.selectProductAmount(amount);
  });


  //This TC is supposed to contain the logic for the 3 testcases but it require more efforts --TBD--
  it.skip("Verify the functionality of the 3 TCs in one TC (NotCompleted)", () => {
    HomePage_PO.visitHomePage();
    HomePage_PO.acceptAllCookies();
    ProductDetails_PO.verifyCartEmpty();
    HomePage_PO.openRandomElementDetails();
    // HomePage_PO.openProductDetails();

    const { amount } = productInfo;
    ProductDetails_PO.verifyTotalItemPrice(amount);
  });

  it("test", () => {
    HomePage_PO.visitHomePage();
    HomePage_PO.acceptAllCookies();
    ProductDetails_PO.verifyCartEmpty();
    HomePage_PO.openRandomElementDetails();


    cy.wait(3500);

  });
});
