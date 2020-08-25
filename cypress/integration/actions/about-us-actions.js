import { title } from '../mock-data/about-us-elements';

export function checkTitleAboutUs() {
  cy.get(title.selector).should('have.text', title.text);
}

