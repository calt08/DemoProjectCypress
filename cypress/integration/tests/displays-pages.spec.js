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
} from '../actions/common/menu-actions';

import { checkHomePage } from '../actions/home-actions';
import { checkTitleInnovationSquad } from '../actions/innovation-squad-actions';
import { checkTitleITBussinessTransf } from '../actions/it-bussiness-actions';
import { checkTitleCustomSoftwareDev } from '../actions/custom-software-actions';
import { checkTitleAgentOfChange } from '../actions/agent-of-change-actions';
import { checkTitleITFoundation } from '../actions/it-foundation-actions';
import { checkTitleITProtection } from '../actions/it-protection-actions';
import { checkTitleCompareProducts } from '../actions/compare-products-actions';
import { checkTitleITNetwork } from '../actions/it-network-actions';
import { checkTitlePointOfDiff } from '../actions/point-of-diff-actions';
import { checkTitleAboutUs } from '../actions/about-us-actions';
import { checkTitleBlog } from '../actions/blog-actions';
import { checkTitleCaseStudies } from '../actions/case-studies-actions';
import { checkTitleCareers } from '../actions/careers-actions';

describe('Display GBH Pages', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.env('url'));
  });

  it('Display Home Page', () => {
    checkHomePage();
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

