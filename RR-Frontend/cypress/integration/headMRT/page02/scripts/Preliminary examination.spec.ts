import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
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
  describe('Preliminary examination', () => {
    it('Preliminary examination', () => {
      elementShouldBeEnabled('hea_m_020503');
      elementShouldBeEnabled('hea_m_020507');
      elementShouldBeEnabled('hea_m_020515');
      elementShouldBeEnabled('hea_m_020511');
      clickElement('hea_m_020503', true, 'checkbox');
      elementShouldBeEnabled('hea_m_020505');
      elementShouldBeEnabled('hea_m_020506');

      clickElement('hea_m_020507', true, 'checkbox');
      elementShouldBeEnabled('hea_m_020509');
      elementShouldBeEnabled('hea_m_020510');
      clickElement('hea_m_020511', true, 'checkbox');
      elementShouldBeEnabled('hea_m_020513');
      elementShouldBeEnabled('hea_m_020514');
      clickElement('hea_m_020515', true, 'checkbox');
      elementShouldBeEnabled('hea_m_020517');
      elementShouldBeEnabled('hea_m_020517');
    });
  });
});
