import { title, setUpIntroCallButton } from '../mock-data/it-bussiness-elements';

export function checkTitleITBussinessTransf() {
  cy.get(title.selector).should('have.text', title.text);
}

export function colorOfButton() {
  cy.get(setUpIntroCallButton).then(($div) => {
    let color = $div.css('background-color');
    console.log(color);
  });
}

