import { title } from '../mock-data/custom-software-dev-elements';

export function checkCustomSoftwareDevPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/custom-software-development/`)
    .title().should('eq', 'Custom Software Development');
}

