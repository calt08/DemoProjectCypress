import { title, pageTitle } from '../mock-data/it-foundation-elements';

export function checkITFoundationPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/it-essentials/`)
    .title().should('eq', pageTitle.text);
}

