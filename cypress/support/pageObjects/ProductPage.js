/// <reference types="Cypress" />

class ProductPage {

    goToCheckoutPage() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getAllProductPrices(){
        return cy.get("tr td:nth-child(4)")
    }
}

export default ProductPage;