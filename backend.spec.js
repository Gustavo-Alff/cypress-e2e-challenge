describe('Simulação de poupança SICREDI', () => {
    it('Dado que acessei o simulador de investimentos da poupança', () => {
        cy.request('http://5b847b30db24a100142dce1b.mockapi.io/api/v1/simulador')
            .then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response).to.have.property('headers')
                expect(response.body).to.have.property('id', 1)
                expect(response.body).to.have.property('meses').and.to.have.all.members(['112', '124', '136', '148'])
                expect(response.body).to.have.property('valor').and.to.have.all.members(['2.802','3.174','3.564','3.971'])
            })
    })
})