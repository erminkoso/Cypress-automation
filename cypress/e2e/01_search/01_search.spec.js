describe('Search', () => {

    const url = Cypress.env('baseUrl');

    it('should visit page', () => {
        cy.visit(url);
      //cy.get('selector here').should('contain', 'SkidRow');
    });

  });