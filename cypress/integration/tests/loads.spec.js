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
	goToITProtection,
} from '../actions/menu-actions';
import { title, subtitle } from '../mock-data/common/pages-elements';

describe('Display GBH Pages', () => {
	beforeEach(() => {
		cy.clearLocalStorage();
		cy.visit(Cypress.env('url'));
	});

	it('Display Home Page', () => {
		// cy.get(title.selector).should('have.text', title.titles.Home);
		cy.get(title.selector).should(($div) => {
			// console.log($div.text());
			expect($div.text().trim()).equal(title.titles.Home);
		});
	});

	it('Display Innovation Squad Page', () => {
		goToInnovationSquad();
		cy.get(title.selector).should('have.text', title.titles.innovationSquad);
	});

	it('Display IT Business Transformation Page', () => {
		goToITBusinessTransf();
		cy.get(title.selector).should('have.text', title.titles.itBusinessTransf);
	});

	it('Display Custom Software Development Page', () => {
		goToCustomSoftDev();
		cy.get(title.selector).should('have.text', title.titles.customSoftwareDev);
	});

	it('Display Agent of Change Staff Augmentation Page', () => {
		goToAgentOfChange();
		cy.get(title.selector).should('have.text', title.titles.agentOfChange);
	});

	it('Display IT Fundation Page', () => {
		goToITFoundation();
		cy.get(title.selector).should('have.text', title.titles.itFoundation);
	});

	it('Display IT Protection Page', () => {
		goToITProtection();
		cy.get(title.selector).should('have.text', title.titles.itProtection);
	});

	it('Display Compare products Page', () => {
		goToCompareProducts();
		cy.get(title.selector).should('have.text', title.titles.compareProducts);
	});

	it('Display IT Network Solutions Page', () => {
		goToITNetwork();
		cy.get(title.selector).should(($div) => {
			expect($div.text().trim()).equal(title.titles.itNetwork);
		});
	});

	it('Display About us Page', () => {
		goToAboutUs();
		cy.get(title.selector).should('have.text', title.titles.aboutUs);
	});

	it('Display Point of Differentiation Page', () => {
		goToPointOfDiff();
		cy.get(subtitle.selector).should(
			'have.text',
			subtitle.subtitles.pointOfDiff
		);
	});

	it('Display Blog Page', () => {
		goToBlog();
		cy.get(title.selector).should('have.text', title.titles.blog);
	});

	it('Display Case Studies Page', () => {
		goToCaseStudies();
		cy.get(title.selector).should('have.text', title.titles.caseStudies);
	});

	it('Display Careers Page', () => {
		goToCareers();
		cy.get(title.selector).should('have.text', title.titles.careers);
	});
});
