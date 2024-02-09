describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.get('[data-test = "email-input"]').type("tom@gmail.com")
        cy.get('[data-test = "submit-button"]').click()
        // cy.getByData("submit-button").click()
        cy.get('[data-test = "success-message"]').should("exist").contains("tom@gmail.com")
    })

    it("does not allow an invalid Email address", () => {
        cy.get('[data-test = "email-input"]').type("tom.")
        cy.get('[data-test = "submit-button"]').click()
        // cy.getByData("submit-button").click()
        cy.get('[data-test = "success-message"]').should("not.exist")
    })

    it("does NOT allow already subscribed email addresses", () => {
        cy.get('[data-test = "email-input"]').type("john@example.com")
        cy.get('[data-test = "submit-button"]').click()
        // cy.getByData("submit-button").click()
        cy.get('[data-test = "server-error-message"]').should("exist").contains("already exists. Please use a different email address.")
    })
})
