import { title } from '../mock-data/home-elements';

export function checkTitleHomePage() {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.text);
  });
}

