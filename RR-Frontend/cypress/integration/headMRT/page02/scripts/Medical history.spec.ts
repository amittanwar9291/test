import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 2 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });
  describe('Medical history', () => {
    it('Medical history', () => {
      elementShouldBeEnabled('hea_m_020503');
      elementShouldBeEnabled('hea_m_020507');
      elementShouldBeEnabled('hea_m_020515');
      elementShouldBeEnabled('hea_m_020511');

      elementShouldBeEnabled('hea_m_020303-1');
      elementShouldBeEnabled('hea_m_020105-1');
    });
  });
});
