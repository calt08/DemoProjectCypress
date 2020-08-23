import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleBlog = () => {
  cy.get(title.selector).should('have.text', title.titles.blog);
}


