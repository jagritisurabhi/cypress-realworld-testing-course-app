describe('test home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero Section", () => {
    it('the <h1> element contains the correct text', () => {
      // cy.visit('http://localhost:3000')
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      // cy.visit("http://localhost:3000")
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Application", () => {
      cy.get('[data-test = "course-0"]').find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it.only("Course: Testing Foundations", () => {
      cy.get('[data-test = "course-1"]').find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it.only("Course: Cypress Fundamentals", () => {
      cy.get('[data-test = "course-2"]').find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })

  })

})