import { subtitle } from '../../mock-data/point-of-diff-elements';

export function checkTitlePointOfDiff() {
  cy.get(subtitle.selector)
    .should('have.text', subtitle.text);
}

