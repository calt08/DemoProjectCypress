import { title } from '../../mock-data/it-foundation-elements';

export function checkTitleITFoundation() {
  cy.get(title.selector).should('have.text', title.text);
}

