import {mainMenu} from '../mock-data/common/menu-elements'
require('cypress-nhover')

export function goToInnovationSquad(){
    cy.get(mainMenu.solutions.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'Innovation Squad').selector).click({force:true});
}

export function goToITBusinessTransf(){
    cy.get(mainMenu.solutions.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'IT Business Transformation').selector).click({force:true});
}

export function goToCustomSoftDev(){
    cy.get(mainMenu.solutions.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'Custom Software Development').selector).click({force:true});
}

export function goToAgentOfChange(){
    cy.get(mainMenu.solutions.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'Agent of Change Staff Augmentation').selector).click({force:true});
}

export function goToITFoundation(){
    cy.get(mainMenu.solutions.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'IT Support Service').selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'IT Support Service').selector).inside.find(e => e.text == 'IT Foundation').click({force:true});
}



export function goToAboutUs(){
    cy.get(mainMenu.whoWeAre.selector).nhover().get(mainMenu.whoWeAre.inside.find(e => e.text == 'About us').selector).should('be.visible').click({force:true});
    
    
    // .trigger('mouseover').click()
    
    // next('.sub-menu-wrapper').then($el=>{
    //         cy.wrap($el).invoke('show')
    //         cy.wrap($el).get(mainMenu.whoWeAre.inside.find(e => e.text == 'About us').selector).should('be.visible').click({force:true});
    //     })
    // cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'About us').selector).should('be.visible')
    // .next('.sub-menu-wrapper').then($el=>{
    //     cy.wrap($el).invoke('show')
    //     cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'About us').selector).should('be.visible').click({force:true});
    // })
    // .trigger('mouseover').trigger('mousedown').click()
    // cy.wait(1000)
    // //.click({multiple:true})
    // .click({force:true});
    // cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'About us').selector).should('be.visible').click({force:true});
}

export function goToPointOfDiff(){
    cy.get(mainMenu.whoWeAre.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'Point Of Differentiation').selector).click({force:true});
}

export function goToBlog(){
    cy.get(mainMenu.whoWeAre.selector).click({force:true});
    cy.get(mainMenu.whoWeAre.inside.find(e => e.text == 'Blog').selector).click({force:true});
}

export function goToCaseStudies(){
    cy.get(mainMenu.caseStudies.selector).click({force:true});
}

export function goToCareers(){
    cy.get(mainMenu.carreers.selector).click({force:true});
}
