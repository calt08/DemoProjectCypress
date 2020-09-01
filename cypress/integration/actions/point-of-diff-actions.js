import { subtitle, pageTitle, contactForm } from '../mock-data/point-of-diff-elements';

export function checkPointOfDiffPage() {
  cy.get(subtitle.selector)
    .should('have.text', subtitle.text)
    .url().should('eq', `${Cypress.env('url')}/point-of-differentiation/`)
    .title().should('eq', pageTitle.text);
}

function fillInput(input) {
  cy.get(input.selector).type(input.text)
    .should('have.value', input.text);
}

export function fillContactForm() {
  for(var key of Object.keys(contactForm)){
    fillInput(contactForm[key]);
  }
}

