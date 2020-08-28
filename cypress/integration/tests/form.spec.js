describe('Fill GBH forms', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.env('url'));
  });

  it('Fills Contact form from Point of Diff', () => {
    goToPointOfDiff();
    fillContactForm();
  });
});

