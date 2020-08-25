import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleAboutUs = () => {
  cy.get(title.selector).should('have.text', title.titles.aboutUs);
}

