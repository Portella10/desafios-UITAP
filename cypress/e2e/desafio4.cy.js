/// <reference types="cypress" />

//Cenario
//Navegue até a página inicial e grave o clique do link de atrasos de carregamento e clique no botão nesta página.
//Então faça o teste. Deve esperar até que a página seja carregada.

describe("Desafio 4", () => {
    it("Atrasos de carregamento", () => {
        cy.visit("http://uitestingplayground.com/home");
        cy.contains("a", "Load Delay").click();
        cy.get(".btn", { timeout: 10000 }).should("be.visible").click();
    });
});
