/// <reference types="cypress" />

//Cenario
//Encontre um botão na visualização de rolagem e clique no botão gravar.
//Atualize seu teste para rolar automaticamente o botão para uma área visível.
//Em seguida, execute seu teste para ter certeza de que funciona.

describe("Desafio 8", () => {
    it("Barras de rolagem", () => {
        cy.visit("http://uitestingplayground.com/scrollbars");
        cy.get("#hidingButton").scrollIntoView().should("be.visible").click();
    });
});
