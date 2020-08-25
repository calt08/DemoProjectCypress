import { title } from '../../mock-data/compare-products-elements';

export function checkTitleCompareProducts() {
  cy.get(title.selector).should('have.text', title.text);
}

