const { homeTexts } = require("../constants/texts/home");


describe('Home', () => {

  const url = Cypress.env('baseUrl');

  before(() => {
    cy.log('starting our first test suite');
  });

  beforeEach(() => {
    cy.visit(url);
  });

  it('should visit page', () => {
    cy.get('h1').should('contain', homeTexts.kitchenSinkText);
  });

  it('should verify first subheader', () => {
    cy.get('h2').first().should('contain', homeTexts.commandsText);
  });

  it('should verify second subheader', () => {
    cy.get('h2').eq(1).should('contain', homeTexts.utilitiesText);
  });

  it('should verify third subheader', () => {
    cy.get('h2').last().should('contain', homeTexts.cypressText);
  });

  it('should verify background color', () => {
    cy.get('.navbar').should('have.css', 'background-color').and('eq', 'rgb(34, 34, 34)')
  });

  it('should contain five menu options', () => {
    cy.get('.navbar')
      .should('contain', homeTexts.cypressOptionText)
      .and('contain', homeTexts.commandsOptionText)
      .and('contain', homeTexts.utilitiesOptionText)
      .and('contain', homeTexts.cypressapiOptionText)
      .and('contain', homeTexts.githubOptionText);
  });

  it('should contain five menu options dynamically', () => {
    const values = [homeTexts.cypressOptionText, homeTexts.commandsOptionText, homeTexts.utilitiesOptionText, homeTexts.cypressapiOptionText, homeTexts.githubOptionText];

    values.forEach(function (value) {
      cy.get('.navbar')
        .should('contain', value);
    });

    if (values[2] == 'Utilitiesa') {
      cy.log('Mjera');
    }
    else if (values[2] == 'Utilities') {
      cy.log('Usli u else if');
    }
    else {
      cy.log('Nije mjera');
    };

    cy.get('#navbar > ul').first().children().should('have.length', 3);

    cy.get('#navbar > ul').last().children().should('have.length', 1);
  });


  it('should have silver background and black font color', () => {
    cy.get('body > :nth-child(3)').should('have.css', 'background-color', 'rgb(238, 241, 244)');
    cy.get(':nth-child(3) > .container > .row > #utilities')
      .should('have.css', 'text-decoration', 'none solid rgb(107, 112, 124)')
      .and('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
  });

  it('should have green background and white font color', () => {
    cy.get('h1').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)');
  })
});