import { title } from '../mock-data/home-elements';

export function checkHomePage() {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.text);
  })
    .url().should('eq', `${Cypress.env('url')}`)
    .title().should('eq', 'GBH');
}

