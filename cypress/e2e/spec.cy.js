describe('Pruebas heroku app', () => {
  it('login con usuario y contraseña validos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")
  })


it('login con usuario invalido y contraseña validos', () => {
  cy.visit('https://the-internet.herokuapp.com')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("antoniosmith")
  cy.get('#password').type("SuperSecretPassword!")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your username is invalid!")
})

it('login con usuario valido y contraseña invalidos', () => {
  cy.visit('https://the-internet.herokuapp.com')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("tomsmith")
  cy.get('#password').type("1234!")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your password is invalid!")
})

it('login con usuario y contraseña invalidos', () => {
  cy.visit('https://the-internet.herokuapp.com')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("antoniosmith")
  cy.get('#password').type("superSecretPassword")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your username is invalid!")
})


})