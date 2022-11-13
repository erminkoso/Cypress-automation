const { viewportTexts } = require("../constants/texts/viewport");
const { viewportSelectors } = require("../constants/selectors/viewport");



describe('Viewport', () => {

  const url = Cypress.env('baseUrl');

    beforeEach(() => {
      cy.visit(url);
      cy.get(viewportSelectors.viewportLink).click();
    });

    it('should contain macbook', () => {
      cy.get(viewportSelectors.exampleViewport).should('contain', viewportTexts.macbookText);
      });

      it('should have green background and white font color', () => {
        cy.get(viewportSelectors.subheader).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get(viewportSelectors.subheader).should('have.css', 'color', 'rgb(255, 255, 255)');
      });
});