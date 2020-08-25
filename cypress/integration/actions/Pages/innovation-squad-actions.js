import { title } from '../../mock-data/innovation-squad-elements';

export function checkTitleInnovationSquad() {
  cy.get(title.selector).should('have.text', title.text);
}

