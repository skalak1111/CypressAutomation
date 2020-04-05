/// <reference types="Cypress" />

describe("XHR Test Suite", function(){
    it("First test",function(){

        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.server() //initiates the listening

        //im trying to mock the response from the url - fake response creating to get the 404 error
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
                error: "Hey no response from the server"
            },
            delay: 1000
        }).as("UpdateComment")

        cy.get("button.network-put.btn.btn-warning").click()
        cy.wait("@UpdateComment")
        cy.get(".network-put-comment").should("contain","Hey no response from the server")


    })
})