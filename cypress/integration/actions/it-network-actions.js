import { title } from '../mock-data/it-network-elements';

export function checkTitleITNetwork() {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.text);
  });
}

