import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleITFoundation = () => {
  cy.get(title.selector).should('have.text', title.titles.itFoundation);
}



// end