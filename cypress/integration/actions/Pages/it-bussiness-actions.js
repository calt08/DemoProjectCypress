import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleITBussinessTransf = () => {
  cy.get(title.selector).should('have.text', title.titles.itBusinessTransf);
}



