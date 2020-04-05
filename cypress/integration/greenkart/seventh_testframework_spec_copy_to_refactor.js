/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/homepage_seventh_spec'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Framework test suite', function() {

    before(function(){
        // runs once before all tests in the block
        cy.fixture('testframework').then(function(data){
            this.data = data //assign values to global which is accessible through out this function
        })

    })

    it('My first case', function(){
        Cypress.config("defaultCommandTimeout", 8000) // this is explicit to this test, if wanted globally, then do it in cypress.json
        const homepage = new HomePage()
        const productpage = new ProductPage()
        cy.visit(Cypress.env('url') + "/angularpractice/")

        //dynamic way of getting data from fixtures
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)

        //static way or regular way
        //cy.get(':nth-child(1) > .form-control').type("Bob")
        //cy.get('#exampleFormControlSelect1').select("Female")

        homepage.getTwoWayDataBinding().should("have.value",this.data.name)
        homepage.getEditBox().should("have.attr",'minlength','2')
        homepage.getEnterpreneaur().should("be.disabled")


        homepage.getShopTab().click()
        cy.url().should("include","shop")

        //this can be a custom command and moving to support folder as a new command
        /*cy.get("h4.card-title").each(($el, index, $list) => {
            if($el.text().includes("Blackberry")){
                cy.get('button.btn.btn-info').eq(index).click()
            }
        }) */

        cy.selectProduct("iphone X") // this is from the command i created in the support folder
        cy.selectProduct("Blackberry") //reusing the same function using a custom command


        //Now we can use the above with the dynamic data and iterate to reuse the function using jquery
        this.data.productName.forEach(product => {
            cy.selectProduct(product)
        });

        // Go to checkout page
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains("Checkout").click()
        productpage.goToCheckoutPage().contains("Checkout").click()
        let totalPrice = 0;
        cy.get("tr td:nth-child(4) strong").each(($el,index,$list) => {
            totalPrice += Number($el.text().replace("₹. ",""))
            
        }).then(function(){
            cy.get('h3 > strong').then(function (el) {
                let totalPriceValue = Number(el.text().replace("₹. ",""))
                expect(totalPriceValue).to.equal(totalPrice)
            })
            
        })

        cy.get("button.btn.btn-success").contains("Checkout").click()
        cy.get("#country").type("india")
        cy.get('.suggestions > ul > li > a').click()

       /* cy.get(".suggestions ul").each(($el, index, $list) => {
            if($el.text().includes("India")){
                cy.get('.suggestions > ul > li > a').click()
            }
        }) */
        cy.get("input[type=checkbox]").check({force: true})
        cy.get("input[type=checkbox]").should("be.checked")
        cy.get("input.btn.btn-success.btn-lg").contains("Purchase").click()
        cy.get(".alert").then(function(element){
            let alertText = element.text()
            expect(alertText.includes("Success")).to.be.true
        })

        //cy.log(cy.getTotalPrice(productpage.getAllProductPrices()))

        /*let cy.get("tr td:nth-child(4) strong").text()
        let totalPrice = 0;
        checkoutPrices.forEach($el => {
            if($el.text().includes("$")){
                totalPrice += $el.text().replace("$. ","")
                //cy.get('button.btn.btn-info').eq(index).click()
            }
        });
        cy.log(totalPrice)
        //cy.get('h3 > strong').should("have.text",cy.getTotalPrice(productpage.getAllProductPrices()))
        */
    })
})