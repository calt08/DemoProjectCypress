import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleCustomSoftwareDev = () => {
  cy.get(title.selector).should('have.text', title.titles.customSoftwareDev);
}


