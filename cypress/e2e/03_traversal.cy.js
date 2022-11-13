const { traversalTexts } = require("../constants/texts/traversal");
const { traversalSelectors } = require("../constants/selectors/traversal");

describe('Traversal', () => {

  const url = Cypress.env('baseUrl');

  beforeEach(() => {
    cy.visit(url);
    cy.get(traversalSelectors.traversalLink).click();
  });

  it('should contain persian', () => {
    cy.get(traversalSelectors.languageTable).should('contain', traversalTexts.thirdLanguageIndexText);
  });

  it('should have vegetables on list', () => {
    cy.get(traversalSelectors.healthyFoodTable).should('contain', traversalTexts.secondHealthyFoodIndexText)
  });
});
