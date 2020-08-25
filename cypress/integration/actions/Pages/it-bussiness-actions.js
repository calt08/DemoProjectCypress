import { title } from '../../mock-data/it-bussiness-elements';

export function checkTitleITBussinessTransf() {
  cy.get(title.selector).should('have.text', title.text);
}

