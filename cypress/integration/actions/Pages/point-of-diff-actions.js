import { title, subtitle } from '../../mock-data/common/pages-elements';

export const checkTitlePointOfDiff = () => {
  cy.get(subtitle.selector)
    .should('have.text', subtitle.subtitles.pointOfDiff);
}



// end