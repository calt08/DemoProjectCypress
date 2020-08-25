import { title, setUpIntroCallButton, pageTitle } from '../mock-data/it-bussiness-elements';

export function checkITBussinessTransfPage() {
  cy.get(title.selector).should('have.text', title.text)
    .url().should('eq', `${Cypress.env('url')}/vcio/`)
    .title().should('eq', pageTitle.text);
}

export function colorOfButton() {
  cy.get(setUpIntroCallButton.selector).then(($div) => {
    let color = $div.css('background-color');
    console.log(color);
  });
}

