const solutions = {
	selector: '#menu-item-3240 > a',
	text: 'Solutions',
	inside: {
		innovationSquad: {
			selector: '#menu-item-3248 > a',
			text: 'Innovation Squad',
		},
		itBusinessTransf: {
			selector: '#menu-item-3247 > a',
			text: 'IT Business Transformation',
		},
		customSoftwareDev: {
			selector: '#menu-item-3249 > a',
			text: 'Custom Software Development',
		},
		agentOfChange: {
			selector: '#menu-item-3250 > a',
			text: 'Agent of Change Staff Augmentation',
		},
		itSupport: {
			selector: '#menu-item-4115 > a',
			text: 'IT Support Service',
			inside: {
				itFoundation: {
					selector: '#menu-item-3253 > a',
					text: 'IT Foundation',
				},
				itProtection: {
					selector: '#menu-item-3254 > a',
					text: 'IT Protection & Security',
				},
				compareProducts: {
					selector: '#menu-item-3255 > a',
					text: 'Compare products',
				},
			}, // Inside It support service menu
		},
		itNetwork: {
			selector: '#menu-item-3252 > a',
			text: 'IT Network Solutions',
		},
	}, // Inside solutions menu
};

const whoWeAre = {
	selector: '#menu-item-3241 > a',
	text: 'Who we are',
	inside: {
		aboutUs: {
			selector: '#menu-item-3243 > a',
			text: 'About us',
		},
		pointOfDiff: {
			selector: '#menu-item-3242 > a',
			text: 'Point Of Differentiation',
		},
		blog: {
			selector: '#menu-item-4661 > a',
			text: 'Blog',
		},
	}, //Inside Who We Are
};

const caseStudies = {
	selector: '#menu-item-353 > a',
	text: 'Case Studies',
};

const carreers = {
	selector: '#menu-item-475 > a',
	text: 'Careers',
};

export const mainMenu = {
	solutions,
	whoWeAre,
	caseStudies,
	carreers,
};
