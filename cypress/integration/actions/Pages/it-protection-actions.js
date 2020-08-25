import { title } from '../../mock-data/it-protection-elements';

export function checkTitleITProtection() {
  cy.get(title.selector).should('have.text', title.text);
}

