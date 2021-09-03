import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Lungs pulmonary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Lymphs.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT Pleural pulmonary', () => {
    it('THEN right, left, inputfield, consolidation, atelectasis are enabled', () => {
      clickElement('mam_m_070402');
      elementShouldBeEnabled('mam_m_0704100');
      elementShouldBeEnabled('mam_m_0704101');
      elementShouldBeEnabled('mam_m_070407');
      elementShouldBeEnabled('mam_m_070502');
      elementShouldBeEnabled('mam_m_070503');
    });

    it('WHEN right is checked and 30 inserted into inputfield and "Consolidation" is checked', () => {
      clickElement('mam_m_0704100');
      cy.byRRID('mam_m_070407')
        .click()
        .type('30');
      clickElement('mam_m_070502');
    });

    it('AND click on next page THEN Im redirected to Page 08', () => {
      clickElement('nav-header-btn-next');
    });
  });
});
