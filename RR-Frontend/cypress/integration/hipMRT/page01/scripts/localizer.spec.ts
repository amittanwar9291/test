import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      cy.byRRID('hip_m_010105')
        .shadowFind('#L')
        .shadowClick();

      cy.byRRID('hip_m_010105')
        .shadowFind('#L')
        .should('have.class', 'caption-selected');

      cy.byRRID('hip_m_010105')
        .shadowFind('#R')
        .shadowClick();

      cy.byRRID('hip_m_010105')
        .shadowFind('#R')
        .should('have.class', 'caption-selected');

      cy.byRRID('hip_m_010105')
        .shadowFind('#GESAMT')
        .shadowClick();

      cy.byRRID('hip_m_010105')
        .shadowFind('#GESAMT')
        .should('have.class', 'caption-selected');

      cy.byRRID('hip_m_010105')
        .shadowFind('#L')
        .should('not.have.class', 'caption-selected');
    });
  });
});
