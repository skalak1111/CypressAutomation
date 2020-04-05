/// <reference types="Cypress" />
class HomePage{

    getEditBox(){
        return cy.get(':nth-child(1) > .form-control')
    }
    
    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-pristine')
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getEnterpreneaur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

//to expose this class to available all files in the framework
export default HomePage;