import { title } from '../mock-data/compare-products-elements';

export function checkCompareProductsPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/it-support-service/`)
    .title().should('eq', 'IT Support Service');
}

