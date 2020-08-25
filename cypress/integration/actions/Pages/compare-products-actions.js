import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleCompareProducts = () => {
  cy.get(title.selector).should('have.text', title.titles.compareProducts);
}

