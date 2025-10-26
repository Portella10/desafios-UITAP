/// <reference types="cypress" />

//Cenario
//Grave o texto de configuração no campo de entrada e pressione o botão.
//Em seguida, execute seu teste para garantir que o nome do botão esteja mudando.

describe("Desafio 7", () => {
    it("Entrada de texto", () => {
        cy.visit("http://uitestingplayground.com/textinput");

        cy.get("#newButtonName").type("joao");
        cy.get("#updatingButton").click();
        cy.contains("button", "joao").should("be.visible");
    });
});
