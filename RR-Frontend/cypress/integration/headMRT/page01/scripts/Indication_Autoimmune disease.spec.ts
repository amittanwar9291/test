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
  describe('Indication_Autoimmune disease', () => {
    it('Indication_Autoimmune disease', () => {
      elementShouldBeEnabled('hea_m_010104');
      elementShouldBeEnabled('hea_m_010105');
      elementShouldBeEnabled('hea_m_010106');
      elementShouldBeEnabled('hea_m_010107');
      elementShouldBeEnabled('hea_m_010108');

      elementShouldBeEnabled('uni_01_007');
      elementShouldBeEnabled('uni_01_008');

      elementShouldBeEnabled('uni_01_002');
      elementShouldBeEnabled('uni_01_003');
      selectDropdownOptionOS('hea_m_010402-1', 3, true, true);
      elementShouldBeEnabled('hea_m_010403');

      elementShouldBeEnabled('hea_m_010529');
      elementShouldBeEnabled('hea_m_010530');
      elementShouldBeEnabled('hea_m_010531');

      elementShouldBeEnabled('hea_m_010533');
      elementShouldBeEnabled('hea_m_010534');
    });
  });
});
