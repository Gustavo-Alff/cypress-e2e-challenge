/// reference types="cypress"/>

describe('Simulação de poupança SICREDI ', () => {
})
    it('Dado que acessei o simulador de investimentos da poupança',() =>{
        cy.visit('https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/')
        cy.title().should('be.equal', 'Simulador de investimento - Poupança | Sicredi')
    })
    it('Quando insiro as informações no simulador', ()=> {
        cy.get('[value="paraVoce"]')
        .click()
        .should('be.checked')
        cy.get('#valorAplicar').click()
        .type('2000')
        cy.get('#valorInvestir').click()
        .type('2000')
        cy.get('#tempo').click()
        .type('100')
        cy.get('.simular > .btn').click()
    })
    it('Então visualizo as opções de valores para serem investimentos', ()=> {
        cy.get('.blocoResultadoSimulacao > .texto').should('contain', 'Em 100 meses você terá guardado')
        cy.get('.valor').should('contain', 'R$ 2.255')
    })
    it('Dado que acessei o simulador de investimentos da poupança',() =>{
        cy.visit('https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/')
        cy.title().should('be.equal', 'Simulador de investimento - Poupança | Sicredi')
    })
    it('Quando insiro as informações com valor aplicar menor que o permitido', ()=> {
        cy.get('[value="paraVoce"]')
        .click()
        .should('be.checked')
        cy.get('#valorAplicar').click()
        .type('1999')
        cy.get('.simular > .btn').click()

    })
    it('Então recebo uma mensagem orientando sobre qual o valor mínimo para ser aplicado', ()=> {
        cy.get('#valorAplicar-error').should('contain', 'Valor mínimo de 20.00')
    })
    it('Dado que acessei o simulador de investimentos da poupança',() =>{
        cy.visit('https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/')
        cy.title().should('be.equal', 'Simulador de investimento - Poupança | Sicredi')
    })
    it('Quando insiro as informações com valor Investir menor que o permitido', ()=> {
        cy.get('[value="paraVoce"]')
        .click()
        .should('be.checked')
        cy.get('#valorInvestir').click()
        .type('1999')
        cy.get('.simular > .btn').click()

    })
    it('Então recebo uma mensagem orientando sobre qual o valor mínimo para ser aplicado', ()=> {
        cy.get('#valorInvestir-error').should('contain', 'Valor mínimo de 20.00')
    })


  
  