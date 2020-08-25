import { title } from '../mock-data/case-studies-elements';

export function checkCaseStudiesPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/case-studies/`)
    .title().should('eq', 'Case Studies');
}

