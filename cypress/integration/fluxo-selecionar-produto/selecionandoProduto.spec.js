describe('Cenário de teste: Selecionar produto', () => {

    it('Selecionando classe "Medicamentos" no footer', () => {
        cy.visit('')
        cy.get('.header__footer').contains('Medicamentos').click({ force: true })
    })

    it('Selecionando uma classe de tipo de medicamentos', () => {
        cy.get('.search-single-navigator').contains('Diabetes').click()
    })

    it('Selecionando o primeiro produto da lista', () => {
        cy.get('.header:first').click()
    })

    it('Adicionando o produto ao carrinho', () => {
        cy.get('.buy-button').click()
    })

    it('Removendo produto do carrinho', () => {
        cy.get('.x-minicart__item-remove').click()
        cy.get('.x-minicart__empty-text-container').should('contain', 'Seu carrinho está vazio')
    })

})