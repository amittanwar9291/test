import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary ', () => {
      elementShouldBeEnabled('hip_m_090104');
      elementShouldBeEnabled('hip_m_090105');
      elementShouldBeEnabled('hip_m_090106');

      elementShouldBeEnabled('hip_m_090203');
      elementShouldBeEnabled('hip_m_090204');
      elementShouldBeEnabled('hip_m_090206');
      elementShouldBeEnabled('hip_m_090207');
      elementShouldBeEnabled('hip_m_090208');
      elementShouldBeEnabled('hip_m_090209');

      clickElement('hip_m_090204', true, 'checkbox');
      elementShouldBeEnabled('hip_m_090205');

      clickElement('hip_m_090209', true, 'checkbox');
      elementShouldBeEnabled('hip_m_090211');
      elementShouldBeEnabled('hip_m_090212');
      elementShouldBeEnabled('hip_m_090213');
      elementShouldBeEnabled('hip_m_090214');
      elementShouldBeEnabled('hip_m_090216');
    });
  });
});
