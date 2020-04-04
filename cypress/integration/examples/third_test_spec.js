/// <reference types="Cypress" />

describe('Third Test Suite', function(){
    it('My first case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //how to check the checkbox
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked')
        cy.get('#checkBoxOption1').should('have.value','option1')

        //you can concatinate the above assertions in single line
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        //how to uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

         //check all the checkboxes
         cy.get('input[type=checkbox]').check()

        //uncheck all the checkboxes
        cy.get('input[type=checkbox]').uncheck()

        //check only selected checkboxes
        cy.get('input[type=checkbox]').check(['option1','option3'])

        //select the value from the select or list box
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.get('#dropdown-class-example').should('not.have.value','option1')

        //autocomplete
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, $index, $list) => {
            if($el.text().includes('Indonesia')){
              // Can also be used this way  if($el.text() === 'Indonesia'){
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','Indonesia')

        //check whether container is visible
        cy.get('#displayed-text').should('be.visible')
        // click hide 
        cy.get('#hide-textbox').click()
         //check whether container is invisible
        cy.get('#displayed-text').should('not.be.visible')

        //with radio buttons
        cy.get('input[value=radio2]').check().should('be.checked')
        cy.get('input[value=radio3]').should('not.be.checked')

    })
})