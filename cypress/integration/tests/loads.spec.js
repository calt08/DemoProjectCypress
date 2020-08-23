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

import { checkTitleHomePage } from '../actions/Pages/home-actions';
import { checkTitleInnovationSquad } from '../actions/Pages/innovation-squad-actions';
import { checkTitleITBussinessTransf } from '../actions/Pages/it-bussiness-actions';
import { checkTitleCustomSoftwareDev } from '../actions/Pages/custom-software-actions';
import { checkTitleAgentOfChange } from '../actions/Pages/agent-of-change-actions';
import { checkTitleITFoundation } from '../actions/Pages/it-foundation-actions';
import { checkTitleITProtection } from '../actions/Pages/it-protection-actions';
import { checkTitleCompareProducts } from '../actions/Pages/compare-products-actions';
import { checkTitleITNetwork } from '../actions/Pages/it-network-actions';
import { checkTitlePointOfDiff } from '../actions/Pages/point-of-diff-actions';
import { checkTitleAboutUs } from '../actions/Pages/about-us-actions';
import { checkTitleBlog } from '../actions/Pages/blog-actions';
import { checkTitleCaseStudies } from '../actions/Pages/case-studies-actions';
import { checkTitleCareers } from '../actions/Pages/careers-actions';

describe('Display GBH Pages', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.env('url'));
  });

  it('Display Home Page', () => {
    checkTitleHomePage();
  });

  it('Display Innovation Squad Page', () => {
    goToInnovationSquad();
    checkTitleInnovationSquad();
  });

  it('Display IT Business Transformation Page', () => {
    goToITBusinessTransf();
    checkTitleITBussinessTransf();
  });

  it('Display Custom Software Development Page', () => {
    goToCustomSoftDev();
    checkTitleCustomSoftwareDev();
  });

  it('Display Agent of Change Staff Augmentation Page', () => {
    goToAgentOfChange();
    checkTitleAgentOfChange();
  });

  it('Display IT Foundation Page', () => {
    goToITFoundation();
    checkTitleITFoundation();
  });

  it('Display IT Protection Page', () => {
    goToITProtection();
    checkTitleITProtection();
  });

  it('Display Compare products Page', () => {
    goToCompareProducts();
    checkTitleCompareProducts();
  });

  it('Display IT Network Solutions Page', () => {
    goToITNetwork();
    checkTitleITNetwork();
  });

  it('Display About us Page', () => {
    goToAboutUs();
    checkTitleAboutUs();
  });

  it('Display Point of Differentiation Page', () => {
    goToPointOfDiff();
    checkTitlePointOfDiff();
  });

  it('Display Blog Page', () => {
    goToBlog();
    checkTitleBlog();
  });

  it('Display Case Studies Page', () => {
    goToCaseStudies();
    checkTitleCaseStudies();
  });

  it('Display Careers Page', () => {
    goToCareers();
    checkTitleCareers();
  });
});


