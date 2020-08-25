import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleInnovationSquad = () => {
  cy.get(title.selector).should('have.text', title.titles.innovationSquad);
}

