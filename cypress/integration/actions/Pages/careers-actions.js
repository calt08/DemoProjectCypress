import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleCareers = () => {
  cy.get(title.selector).should('have.text', title.titles.careers);
}



// end