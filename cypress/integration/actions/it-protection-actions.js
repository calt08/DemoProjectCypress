import { title } from '../mock-data/it-protection-elements';

export function checkITProtectionPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/it-protection-support/`)
    .title().should('eq', 'IT Protection & Support');
}

