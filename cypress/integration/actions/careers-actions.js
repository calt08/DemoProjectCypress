import { title } from '../mock-data/careers-elements';

export function checkTitleCareers() {
  cy.get(title.selector).should('have.text', title.text);
}

