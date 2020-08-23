import { mainMenu } from '../mock-data/common/menu-elements';

export function goToInnovationSquad() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.innovationSquad.selector)
		.click({ force: true, });

}

export function goToITBusinessTransf() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.itBusinessTransf.selector)
		.click({ force: true, });
}

export function goToCustomSoftDev() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.customSoftwareDev.selector)
		.click({ force: true });
}

export function goToAgentOfChange() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.agentOfChange.selector)
		.click({ force: true });
}

export function goToITFoundation() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.itSupport.selector).click({ force: true });
	cy.get(mainMenu.solutions.inside.itSupport.inside.itFoundation.selector)
		.click({ force: true });
}

export function goToITProtection() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.itSupport.selector).click({ force: true });
	cy.get(mainMenu.solutions.inside.itSupport.inside.itProtection.selector)
		.click({ force: true });
}

export function goToCompareProducts() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.itSupport.selector).click({ force: true });
	cy.get(mainMenu.solutions.inside.itSupport.inside.compareProducts.selector)
		.click({ force: true });
}

export function goToITNetwork() {
	cy.get(mainMenu.solutions.selector).click();
	cy.get(mainMenu.solutions.inside.itNetwork.selector).click({ force: true });
}

export function goToAboutUs() {
	cy.get(mainMenu.whoWeAre.selector).click();
	cy.get(mainMenu.whoWeAre.inside.aboutUs.selector).click({ force: true });
}

export function goToPointOfDiff() {
	cy.get(mainMenu.whoWeAre.selector).click();
	cy.get(mainMenu.whoWeAre.inside.pointOfDiff.selector).click({ force: true });
}

export function goToBlog() {
	cy.get(mainMenu.whoWeAre.selector).click();
	cy.get(mainMenu.whoWeAre.inside.blog.selector).click({ force: true });
}

export function goToCaseStudies() {
	cy.get(mainMenu.caseStudies.selector).click();
}

export function goToCareers() {
	cy.get(mainMenu.carreers.selector).click();
}

export function changeLanguageToES() {
	cy.get('.site-language-selector:first > a').click();
	cy.get('.wpml-ls-link').eq(1).click();
}



// end