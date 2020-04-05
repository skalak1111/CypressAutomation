/// <reference types="Cypress" />

describe('Sixt test suite', function(){

    it('first test', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //How to test mega menus or mouseover menus. Use jquery functions. 
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        //Cypress has ability to click on hidden elements. No solution in Selenium
        //cy.contains('Reload').click({ force: true })

        //How to grab the value when new tab is opened.
        cy.get('#opentab').invoke('attr','href').should('include','http')

        //another way but this way you can catch the url
        cy.get('#opentab').then(function(el){
            let url = el.prop('href')
            // another way is let url = el.attr('href')
            cy.log(url)
            cy.visit(url)
        })

        

    })
})