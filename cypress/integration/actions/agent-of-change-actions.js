import { title, pageTitle } from '../mock-data/agent-of-change-elements';

export function checkAgentOfChangePage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/staff-augmentation/`)
    .title().should('eq', pageTitle.text);
}

