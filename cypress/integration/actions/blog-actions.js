import { title } from '../mock-data/blog-elements';

export function checkTitleBlog() {
  cy.get(title.selector).should('have.text', title.text);
}

