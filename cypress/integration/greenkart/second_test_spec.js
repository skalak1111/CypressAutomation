/// <reference types="Cypress" />

describe('My Second test suite', function(){
    it('My first test', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(1000)
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('.product-name').text()
            if(vegName.includes('Capsicum')) { 
                $el.find('button').click()
                //cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        cy.get('.cart-icon > img').click()
        //cy.contains('PROCEED TO CHECKOUT').click()
        //cy.contains('Place Order').click()
    })
})