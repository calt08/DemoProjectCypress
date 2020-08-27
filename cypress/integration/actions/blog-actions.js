import { title, pageTitle } from '../mock-data/blog-elements';

export function checkBlogPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/blog/`)
    .title().should('eq', pageTitle.text);
}

