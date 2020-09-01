import { goToPointOfDiff } from '../actions/common/menu-actions';
import { fillContactForm } from '../actions/point-of-diff-actions';

describe('Fill GBH forms', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.env('url'));
  });

  it('Fills Contact form', () => {
    goToPointOfDiff();
    fillContactForm();
  });
});

