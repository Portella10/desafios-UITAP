/// <reference types="cypress" />

//Cenario
//Clique no botão de gravação. O botão fica verde depois de clicar.
//Em seguida, execute seu teste para ter certeza de que ele é capaz de clicar no botão.

describe("Desafio 6", () => {
    it("Clique", () => {
        cy.visit("http://uitestingplayground.com/click");

        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)");
    });
});
