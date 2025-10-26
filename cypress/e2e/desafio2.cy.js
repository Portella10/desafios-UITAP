/// <reference types="cypress" />

//Cenario
//Grave o clique do botão principal (azul) e pressione ok no pop-up de alerta.
//Em seguida, execute seu teste para garantir que ele possa identificar o botão usando a classe btn-primary.

describe("Desafio 2", () => {
    it("Atributo de classe", () => {
        cy.visit("http://uitestingplayground.com/classattr");

        cy.get(".btn-primary").click();
        cy.on("window:alert", (msm) => {
            expect(msm).to.be.equal("Primary button pressed");
        });
    });
});
