/// <reference types="cypress" />

//Cenario
//Clique no botão gravar e, em seguida, duplique a etapa do clique do botão no seu teste.
//Execute o teste para garantir que o botão verde não possa ser pressionado duas vezes.

describe("Desafio 3 ", () => {
    it("Camadas Ocultas", () => {
        cy.visit("http://uitestingplayground.com/hiddenlayers");
        cy.get("#greenButton").click();
        cy.get("#blueButton").click();
        cy.on("fail", (err) => {
            expect(err.message).to.include("is being covered by another element");
            // Impede que o teste seja interrompido
            return false;
        });
        cy.get("#greenButton").click().should("");
    });
});
