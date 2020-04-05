/// <reference types="Cypress" />

describe("API test Suite", function(){
    it("First test", function(){

        let body = {
            "name": "Learn Cypress Automation",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "John do"
        }
        // here we dont have any UI so we can ignore cy.visit(). this endpoint can be tested using postmaster client
        cy.request("POST","http://216.10.245.166/Library/Addbook.php", body ).then(function(response) {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).eq(200)
            //for more response related assertions check the documentation
            //https://docs.cypress.io/api/commands/request.html#Command-Log

        })
        
    })
})