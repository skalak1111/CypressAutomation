/// <reference types="Cypress" />

describe('Fourth test suite', function(){
    it('first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.visit('http://qaclickacademy.com/practice.php')

        cy.get('#name').type('Krishna')
        //alert box is automatically handled by cypress. It opens and closes
        cy.get('#alertbtn').click()
        //confirm box is automatically handled by cypress. It opens and closes
        cy.get('#name').type('Krishna')
        cy.get('#confirmbtn').click()

        //check the value when clicked on alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello Krishna, share this practice page and share your knowledge')
        })
        //compare or check the value when clicked on confirm
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello Krishna, Are you sure you want to confirm?')
        })

        //For NEW TABS, in cypress we need to open child url in the same parent page i.e. remove target blank if present
        cy.get('#opentab').invoke('removeAttr','target').click() //invoke first param is jquery method and then clicks open in same page
        
        cy.url().should('include', 'rahulshettyacademy') //will check whether this part of url is available or not

        //GO command works for forward and back to history page
        cy.go('back')



    })
})