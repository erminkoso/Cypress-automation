const { queryingTexts } = require("../constants/texts/querying");
const { queryingSelectors } = require("../constants/selectors/querying");

describe('Querying', () => {

  const url = Cypress.env('baseUrl');

  beforeEach(() => {
    cy.visit(url);
    cy.get(queryingSelectors.queryingLink).click();
  });

  it('should open Querying and verify URL', () => {
    cy.url().should('include', '/commands/querying');
    cy.url().should('eq', 'https://example.cypress.io/commands/querying');
  });

  it('should have Button written in button', () => {
    cy.get(queryingSelectors.queryButton).should('contain', queryingTexts.button);
  });
  it('should get data cy and submit text', () => {
    cy.get(queryingSelectors.submitButton).should('contain', queryingTexts.submit);
    cy.get(queryingSelectors.bestPracticesLink).should('contain', queryingTexts.practiceSubmenu)
  });

  it('should contain four elements', () => {
    cy.get(queryingSelectors.fruitsTable).children().should('have.length', 4);
    cy.get(queryingSelectors.fruitsTable).children().eq(2).should('contain',queryingTexts.thirdFruit)
  });
});