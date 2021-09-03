import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
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
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      cy.byRRID('kne_m_010104')
        .shadowFind('#L')
        .shadowClick();

      cy.byRRID('kne_m_010104')
        .shadowFind('#L')
        .should('have.class', 'knee__name--checked');

      cy.byRRID('kne_m_010104')
        .shadowFind('#R')
        .shadowClick();

      cy.byRRID('kne_m_010104')
        .shadowFind('#R')
        .should('have.class', 'knee__name--checked');

      cy.byRRID('kne_m_010104')
        .shadowFind('#L')
        .should('not.have.class', 'knee__name--checked');
    });
  });
});
