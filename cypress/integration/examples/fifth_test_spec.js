/// <reference types="Cypress" />

describe('Fifth test suite', function(){
    it('first test',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Data check from Tabular format. Check price 25 for python course in the x row, y column
        cy.get('tr td:nth-child(2)').each(($el, $index, $list) => {
            let getText = $el.text()
            if(getText === "Master Selenium Automation in simple Python Language") {
                //another way if(getText includes "Python Language") {
                cy.get('tr td:nth-child(2)').eq($index).next().then(function(price){
                    let priceText= price.text()
                    expect(priceText).to.equal('25')
                })

                //other short way
                expect($el.next().text()).to.equal('25')
            }
        })

    })
})