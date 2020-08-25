import { title } from '../mock-data/about-us-elements';

export function checkAboutUsPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/about-us/`)
    .title().should('eq', 'About us');
}

