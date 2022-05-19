//seção 3 - Aula 16
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Kenia')
    cy.get('#lastName').type('Reis')
    cy.get('#email').type('keniareis@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()  
})