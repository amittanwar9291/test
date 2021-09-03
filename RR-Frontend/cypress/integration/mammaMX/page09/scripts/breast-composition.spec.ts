import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { clickElement, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Breast Composition', () => {
    it('Entirely fatty -> a', () => {
      clickElement('mam_mx_030105', true, 'checkbox');
      selectLocalizerElement('mam_mx_030108', 'tspan', 0, true);
      selectLocalizerElement('mam_mx_030111', 'tspan', 0, true);
      cy.wait(2000);
      cy.get('rr-top-navigation a')
        .eq(3)
        .click({ force: true });
      clickElement('mam_mx_040303', true, 'radio');
      clickElement('mam_mx_040402', true, 'radio');
      cy.get('rr-top-navigation a')
        .eq(8)
        .click({ force: true });
      cy.byRRID('mam_mx_090104')
        .contains('a')
        .should('be.visible');
      cy.byRRID('mam_mx_090106')
        .contains('a')
        .should('be.visible');
      cy.get('rr-top-navigation a')
        .eq(3)
        .click({ force: true });
    });

    it('Scattered areas of fibroglandular density -> b', () => {
      clickElement('mam_mx_040304', true, 'radio');
      clickElement('mam_mx_040403', true, 'radio');
      cy.get('rr-top-navigation a')
        .eq(8)
        .click({ force: true });
      cy.byRRID('mam_mx_090104')
        .contains('b')
        .should('be.visible');
      cy.byRRID('mam_mx_090106')
        .contains('b')
        .should('be.visible');
      cy.get('rr-top-navigation a')
        .eq(3)
        .click({ force: true });
    });

    it('Heterogeneously dense, masses may be obscured -> c', () => {
      clickElement('mam_mx_040305', true, 'radio');
      clickElement('mam_mx_040404', true, 'radio');
      cy.get('rr-top-navigation a')
        .eq(8)
        .click({ force: true });
      cy.byRRID('mam_mx_090104')
        .contains('c')
        .should('be.visible');
      cy.byRRID('mam_mx_090106')
        .contains('c')
        .should('be.visible');
      cy.get('rr-top-navigation a')
        .eq(3)
        .click({ force: true });
    });

    it('Extremely dense. The sensitivity is significantly reduced. -> d', () => {
      clickElement('mam_mx_040306', true, 'radio');
      clickElement('mam_mx_040405', true, 'radio');
      cy.get('rr-top-navigation a')
        .eq(8)
        .click({ force: true });
      cy.byRRID('mam_mx_090104')
        .contains('d')
        .should('be.visible');
      cy.byRRID('mam_mx_090106')
        .contains('d')
        .should('be.visible');
    });
  });
});
