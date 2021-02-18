/// <reference types="cypress" />

context('Files', () => {
  it('cy.fixture() - load a fixture', () => {
      cy.fixture("example.json").then(fixture => console.log(fixture instanceof Object))

      console.log(require("../../fixtures/example.json") instanceof Object);
      console.log({"key": "value"} instanceof Object);
  })
})
