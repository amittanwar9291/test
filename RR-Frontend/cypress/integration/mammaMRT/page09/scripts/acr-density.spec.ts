import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - acr density', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_AnatomyEnhancement.url + '/' + pageId);
        });
      });
    });
  });

  describe('ACR Density', () => {
    it('ACR Density Index -> 1', () => {
      clickElement('mam_m_050105', true, 'radio');
      clickElement('mam_m_050107', true, 'radio');
      clickElement('mam_m_050112', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('9')
        .click({ force: true });
      cy.byRRID('mam_m_090105')
        .contains('1')
        .should('be.visible');
      cy.get('rr-top-navigation')
        .contains('5')
        .click({ force: true });
    });

    it('ACR Density Index -> 2', () => {
      clickElement('mam_m_050105', true, 'radio');
      clickElement('mam_m_050108', true, 'radio');
      clickElement('mam_m_050112', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('9')
        .click({ force: true });
      cy.byRRID('mam_m_090105')
        .contains('2')
        .should('be.visible');
      cy.get('rr-top-navigation')
        .contains('5')
        .click({ force: true });
    });

    it('ACR Density Index -> 3', () => {
      clickElement('mam_m_050105', true, 'radio');
      clickElement('mam_m_050109', true, 'radio');
      clickElement('mam_m_050112', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('9')
        .click({ force: true });
      cy.byRRID('mam_m_090105')
        .contains('3')
        .should('be.visible');
      cy.get('rr-top-navigation')
        .contains('5')
        .click({ force: true });
    });

    it('ACR Density Index -> 4', () => {
      clickElement('mam_m_050105', true, 'radio');
      clickElement('mam_m_050110', true, 'radio');
      clickElement('mam_m_050112', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('9')
        .click({ force: true });
      cy.byRRID('mam_m_090105')
        .contains('4')
        .should('be.visible');
    });
  });
});
