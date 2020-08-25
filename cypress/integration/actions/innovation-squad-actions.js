import { title } from '../mock-data/innovation-squad-elements';

export function checkInnovationSquadPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/innovation-squad/`)
    .title().should('eq', 'Innovation Squad');
}

