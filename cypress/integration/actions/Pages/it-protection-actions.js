import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleITProtection = () => {
  cy.get(title.selector).should('have.text', title.titles.itProtection);
}


