/// <reference types="Cypress" />

describe('Framework test suite', function() {

    before(function(){
        // runs once before all tests in the block
        cy.fixture('testframework').then(function(data){
            this.data = data //assign values to global which is accessible through out this function
        })
    })

    it('My first case', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //dynamic way of getting data from fixtures
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        //static way or regular way
        //cy.get(':nth-child(1) > .form-control').type("Bob")
        //cy.get('#exampleFormControlSelect1').select("Female")

        cy.get(':nth-child(4) > .ng-pristine').should("have.value",this.data.name)
        cy.get(':nth-child(1) > .form-control').should("have.attr",'minlength','2')
        cy.get('#inlineRadio3').should("be.disabled")


        cy.get(':nth-child(2) > .nav-link').click()
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

        
    })
})