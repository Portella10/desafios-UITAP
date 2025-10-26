/// <reference types="cypress" />

//Cenario
//Registre as etapas a seguir. Pressione o botão abaixo e aguarde o aparecimento dos dados (15 segundos), clique no texto do rótulo carregado.
//Em seguida, execute seu teste para garantir que ele aguarde a aparência do texto do rótulo.

describe("Desafio 5", () => {
    it("Dados da AJAX", () => {
        cy.visit("http://uitestingplayground.com/ajax");
        cy.get("#ajaxButton").click();
        cy.get(".bg-success", { timeout: 16000 }).should("have.a.text", "Data loaded with AJAX get request.");
    });
});
