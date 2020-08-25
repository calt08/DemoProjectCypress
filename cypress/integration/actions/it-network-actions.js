import { title, pageTitle } from '../mock-data/it-network-elements';

export function checkITNetworkPage() {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.text);
  })
    .url().should('eq', `${Cypress.env('url')}/network-solutions/`)
    .title().should('eq', pageTitle.text);
}

