/// <reference types="cypress" />

// Objetivo do desafio nao usar o ID dinamico para selecionar o elemnto

describe("Desafio 1", () => {
    it("Teste sem o ID Dinamico", () => {
        cy.visit("http://uitestingplayground.com/dynamicid");

        cy.contains("button", "Button with Dynamic ID").click();
    });
});
