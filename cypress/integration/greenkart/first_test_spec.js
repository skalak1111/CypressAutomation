/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function(){
        expect(true).to.equal(true)
    })
    it('Visit IBM website', function(){
        cy.visit('https://ibm.com');
        cy.wait(1000);
        cy.get('#q').type('Analytics{enter}')
    })
    it('Testing Rahul Shetty website', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(1000)
        cy.get('.products').as('productsLocator')
        cy.get('.product:visible').should('have.length.gt', 1)
        cy.get('@productsLocator').find('.product').should('have.length', 2)
        //cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
        //cy.get(':nth-child(2) > .product-action > button').click()
        /*cy.get('.products').find('.product').each(($el, index, $list) => {
            //const vegName = $el.find('.product-name').text()
            if($el.find('.product-name').text().includes('Capsicum')) { 
                //$el.find('button').click()
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })*/
        //asert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function(logo){
            cy.log(logo.text())
        })
        
    })
})