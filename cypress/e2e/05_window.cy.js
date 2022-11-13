const { windowTexts } = require("../constants/texts/window");
const { windowSelectors } = require("../constants/selectors/window");


describe('Window', () => {

  const url = Cypress.env('baseUrl');

    beforeEach(() => {
      cy.visit(url);
      cy.get(windowSelectors.windowLink).click();
    });

    it('should contain title name', () => {
        cy.get(windowSelectors.exampleTitle).should('contain', windowTexts.titleName);
      });

      it('should have green background and white font color', () => {
        cy.get(windowSelectors.subheader).should('have.css', 'background-color', 'rgb(0, 191, 136)');
        cy.get(windowSelectors.subheader).should('have.css', 'color', 'rgb(255, 255, 255)');
      });
});