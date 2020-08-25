import { title } from '../../mock-data/agent-of-change-elements';

export function checkTitleAgentOfChange() {
  cy.get(title.selector).should('have.text', title.text);
}

