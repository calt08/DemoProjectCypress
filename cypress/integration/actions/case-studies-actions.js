import { title } from '../mock-data/case-studies-elements';

export function checkTitleCaseStudies() {
  cy.get(title.selector).should('have.text', title.text);
}

