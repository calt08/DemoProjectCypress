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
import { checkInnovationSquadPage } from '../actions/innovation-squad-actions';
import { checkITBussinessTransfPage, colorOfButton } from '../actions/it-bussiness-actions';
import { checkCustomSoftwareDevPage } from '../actions/custom-software-actions';
import { checkAgentOfChangePage } from '../actions/agent-of-change-actions';
import { checkITFoundationPage } from '../actions/it-foundation-actions';
import { checkITProtectionPage } from '../actions/it-protection-actions';
import { checkCompareProductsPage } from '../actions/compare-products-actions';
import { checkITNetworkPage } from '../actions/it-network-actions';
import { checkPointOfDiffPage, fillContactForm } from '../actions/point-of-diff-actions';
import { checkAboutUsPage } from '../actions/about-us-actions';
import { checkBlogPage } from '../actions/blog-actions';
import { checkCaseStudiesPage } from '../actions/case-studies-actions';
import { checkCareersPage } from '../actions/careers-actions';

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
    checkInnovationSquadPage();
  });

  it('Display IT Business Transformation Page', () => {
    goToITBusinessTransf();
    checkITBussinessTransfPage();
    colorOfButton();
  });

  it('Display Custom Software Development Page', () => {
    goToCustomSoftDev();
    checkCustomSoftwareDevPage();
  });

  it('Display Agent of Change Staff Augmentation Page', () => {
    goToAgentOfChange();
    checkAgentOfChangePage();
  });

  it('Display IT Foundation Page', () => {
    goToITFoundation();
    checkITFoundationPage();
  });

  it('Display IT Protection Page', () => {
    goToITProtection();
    checkITProtectionPage();
  });

  it('Display Compare products Page', () => {
    goToCompareProducts();
    checkCompareProductsPage();
  });

  it('Display IT Network Solutions Page', () => {
    goToITNetwork();
    checkITNetworkPage();
  });

  it('Display About us Page', () => {
    goToAboutUs();
    checkAboutUsPage();
  });

  it('Display Point of Differentiation Page', () => {
    goToPointOfDiff();
    checkPointOfDiffPage();
  });

  it('Display Blog Page', () => {
    goToBlog();
    checkBlogPage();
  });

  it('Display Case Studies Page', () => {
    goToCaseStudies();
    checkCaseStudiesPage();
  });

  it('Display Careers Page', () => {
    goToCareers();
    checkCareersPage();
  });
});

