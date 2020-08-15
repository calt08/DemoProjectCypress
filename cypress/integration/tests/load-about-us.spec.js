import {goToAboutUs} from '../actions/go-to-actions';
import {title as aboutUsTitle} from '../mock-data/about-us'

describe('Load GBH Pages', () =>{
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit('https://gbh.com.do/');
    });

    it('Loads About us', () => {
        goToAboutUs();
        cy.get(aboutUsTitle.selector).should('have.text', aboutUsTitle.text);
    });
});