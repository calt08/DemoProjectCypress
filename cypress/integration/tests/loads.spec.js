import {
	goToInnovationSquad,
	goToITBusinessTransf,
	goToCustomSoftDev,
	goToAgentOfChange,
	goToITFoundation,
	goToCompareProducts,
	goToITNetwork,
	goToAboutUs,
	goToPointOfDiff,
	goToBlog,
	goToCareers,
	goToCaseStudies,
} from '../actions/go-to-actions';
import { title as aboutUsTitle } from '../mock-data/about-us';
import { title, subtitle } from '../mock-data/common/pages-elements';

describe('Load GBH Pages', () => {
	beforeEach(() => {
		cy.clearLocalStorage();
		cy.visit(Cypress.env('url'));
	});

	it('Loads Homepage', () => {
		cy.get(title.selector).should('have.text', title.titles.Home);
	});

	it('Loads Innovation Squad', () => {
		goToInnovationSquad();
		cy.get(title.selector).should('have.text', title.titles.innovationSquad);
	});

	it('Loads IT Business Transformation', () => {
		goToITBusinessTransf();
		cy.get(title.selector).should('have.text', title.titles.itBusinessTransf);
	});

	it('Loads Custom Software Development', () => {
		goToCustomSoftDev();
		cy.get(title.selector).should('have.text', title.titles.customSoftwareDev);
	});

	it('Loads Agent of Change Staff Augmentation', () => {
		goToAgentOfChange();
		cy.get(title.selector).should('have.text', title.titles.agentOfChange);
	});

	it('Loads IT Fundation', () => {
		goToITFoundation();
		cy.get(title.selector).should('have.text', title.titles.itFoundation);
	});

	it('Loads Compare products', () => {
		goToCompareProducts();
		cy.get(title.selector).should('have.text', title.titles.compareProducts);
	});

	it('Loads IT Network Solutions', () => {
		goToITNetwork();
		cy.get(title.selector).should('have.text', title.titles.itNetwork);
	});

	it('Loads About us', () => {
		goToAboutUs();
		cy.get(title.selector).should('have.text', title.titles.aboutUs);
	});

	it('Loads Point of Differentiation', () => {
		goToPointOfDiff();
		cy.get(subtitle.selector).should(
			'have.text',
			subtitle.subtitles.pointOfDiff
		);
	});

	it('Loads Blog', () => {
		goToBlog();
		cy.get(title.selector).should('have.text', title.titles.blog);
	});

	it('Loads Case Studies', () => {
		goToCaseStudies();
		cy.get(title.selector).should('have.text', title.titles.caseStudies);
	});

	it('Loads Careers', () => {
		goToCareers();
		cy.get(title.selector).should('have.text', title.titles.careers);
	});
});
