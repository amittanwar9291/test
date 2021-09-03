import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, elementShouldBeEnabled, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 1 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Examination.url + '/' + pageId);
        });
      });
    });
  });
  describe('Indication_Other indications', () => {
    it('Indication_Other indications', () => {
      elementShouldBeEnabled('hea_m_010104');
      elementShouldBeEnabled('hea_m_010105');
      elementShouldBeEnabled('hea_m_010106');
      elementShouldBeEnabled('hea_m_010107');
      elementShouldBeEnabled('hea_m_010108');

      selectDropdownOptionOS('hea_m_010402-1', 12, true, true);

      elementShouldBeEnabled('hea_m_010569');
      elementShouldBeEnabled('hea_m_010568');
      elementShouldBeEnabled('hea_m_010570');

      elementShouldBeEnabled('hea_m_010572');
      elementShouldBeEnabled('hea_m_010573');
      elementShouldBeEnabled('hea_m_010576');
      elementShouldBeEnabled('hea_m_010574');
      elementShouldBeEnabled('hea_m_010575');
    });
  });
});
