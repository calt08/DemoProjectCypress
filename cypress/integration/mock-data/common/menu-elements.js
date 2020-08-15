const solutions = {
    selector: '#menu-item-3240 > a',
    text: 'Solutions',
    inside: [
        {
            selector: '#menu-item-3248 > a',
            text: 'Innovation Squad'
        },
        {
            selector: '#menu-item-3247 > a',
            text: 'IT Business Transformation'
        },
        {
            selector: '#menu-item-3249 > a',
            text: 'Custom Software Development'
        },
        {
            selector: '#menu-item-3250 > a',
            text: 'Agent of Change Staff Augmentation'
        },
        {
            selector: '#menu-item-4115 > a',
            text: 'IT Support Service',
            inside: [
                {
                    selector: '#menu-item-3253 > a',
                    text: 'IT Foundation'
                    //cy.get(solutions.inside.find(e => e.text == 'IT Support Service').inside.find(e => e.text == 'IT Foundation').selector).click()
                },
                {
                    selector: '#menu-item-3254 > a',
                    text: 'IT Protection & Security'
                },
                {
                    selector: '#menu-item-3255 > a',
                    text: 'Compare products'
                }
            ] // Inside It support service menu
        },
        {
            selector: '#menu-item-3252 > a',
            text: 'IT Network Solutions'
        }
    ] // Inside solutions menu
}

const whoWeAre = {
    selector: '#menu-item-3241 > a',
    text: 'Who we are',
    inside: [
        {
            selector: '#menu-item-3243 > a',
            text: 'About us'
        },
        {
            selector: '#menu-item-3243 > a',
            text: 'Point Of Differentiation'
        },
        {
            selector: '#menu-item-4661 > a',
            text: 'Blog'
        }
    ] //Inside Who We Are
}

const caseStudies = {
    selector: '#menu-item-353 > a',
    text: 'Case Studies'
}

const carreers = {
    selector: '#menu-item-475 > a',
    text: 'Careers'
}

export const mainMenu = {
    solutions,
    whoWeAre,
    caseStudies,
    carreers
}


