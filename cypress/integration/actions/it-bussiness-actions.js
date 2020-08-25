import { title, setUpIntroCallButton } from '../mock-data/it-bussiness-elements';

export function checkITBussinessTransfPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/vcio/`)
    .title().should('eq', 'VCIO');
}

export function colorOfButton() {
  cy.get('.service-best__button > a').then(($div) => {
    let color = $div.css('background-color');
    console.log(color);
  });
}

