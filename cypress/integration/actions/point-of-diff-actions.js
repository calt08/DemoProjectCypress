import { subtitle, pageTitle, contactForm } from '../mock-data/point-of-diff-elements';

export function checkPointOfDiffPage() {
  cy.get(subtitle.selector)
    .should('have.text', subtitle.text)
    .url().should('eq', `${Cypress.env('url')}/point-of-differentiation/`)
    .title().should('eq', pageTitle.text);
}

export function fillContactForm() {
  cy.get(contactForm.name.selector).type(contactForm.name.text)
    .should('have.value', contactForm.name.text);
  cy.get(contactForm.title.selector).type(contactForm.title.text)
    .should('have.value', contactForm.title.text);
  cy.get(contactForm.email.selector).type(contactForm.email.text)
    .should('have.value', contactForm.email.text);
  cy.get(contactForm.phone.selector).type(contactForm.phone.text)
    .should('have.value', contactForm.phone.text);
  cy.get(contactForm.company.selector).type(contactForm.company.text)
    .should('have.value', contactForm.company.text);
  cy.get(contactForm.industry.selector).type(contactForm.industry.text)
    .should('have.value', contactForm.industry.text);
  cy.get(contactForm.comment.selector).type(contactForm.comment.text)
    .should('have.value', contactForm.comment.text);
}

