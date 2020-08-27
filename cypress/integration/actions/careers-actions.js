import { title, pageTitle } from '../mock-data/careers-elements';

export function checkCareersPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/careers/`)
    .title().should('eq', pageTitle.text);
}

