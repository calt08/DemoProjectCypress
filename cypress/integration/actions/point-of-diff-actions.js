import { subtitle } from '../mock-data/point-of-diff-elements';

export function checkPointOfDiffPage() {
  cy.get(subtitle.selector)
    .should('have.text', subtitle.text)
    .url().should('eq', `${Cypress.env('url')}/point-of-differentiation/`)
    .title().should('eq', 'Point Of Differentiation');
}

