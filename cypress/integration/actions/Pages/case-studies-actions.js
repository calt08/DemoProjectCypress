import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleCaseStudies = () => {
  cy.get(title.selector).should('have.text', title.titles.caseStudies);
}



// end