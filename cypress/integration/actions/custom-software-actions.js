import { title } from '../mock-data/custom-software-dev-elements';

export function checkTitleCustomSoftwareDev() {
  cy.get(title.selector).should('have.text', title.text);
}

