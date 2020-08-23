import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleAgentOfChange = () => {
  cy.get(title.selector).should('have.text', title.titles.agentOfChange);
}


