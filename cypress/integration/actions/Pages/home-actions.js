import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitleHomePage = () => {
  cy.get(title.selector).should(($div) => {
    expect($div.text().trim()).equal(title.titles.Home);
  });
}



