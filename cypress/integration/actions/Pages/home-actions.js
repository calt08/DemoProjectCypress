import { title } from '../../mock-data/home-elements';

export const checkTitleHomePage = () => {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.titles.Home);
  });
}

