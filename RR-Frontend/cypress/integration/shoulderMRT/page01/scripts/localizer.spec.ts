import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('ShoulderMRT - page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      cy.byRRID('sho_m_010104')
        .shadowFind('#rightShoulder .shoulder__circle--inner')
        .shadowClick();

      cy.byRRID('sho_m_010104')
        .shadowFind('#rightShoulder')
        .shadowFind('text')
        .should('have.class', 'shoulder__name--checked');

      cy.byRRID('sho_m_010104')
        .shadowFind('#leftShoulder .shoulder__circle--inner')
        .shadowClick();

      cy.byRRID('sho_m_010104')
        .shadowFind('#leftShoulder')
        .shadowFind('text')
        .should('have.class', 'shoulder__name--checked');

      cy.byRRID('sho_m_010104')
        .shadowFind('#rightShoulder')
        .shadowFind('text')
        .should('not.have.class', 'knee__name--checked');
    });
  });
});
