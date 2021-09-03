import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
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
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary -> Advice: further examination', () => {
      elementShouldBeEnabled('sho_m_090104');
      elementShouldBeEnabled('sho_m_090105');
      elementShouldBeEnabled('sho_m_090106');
      elementShouldBeEnabled('sho_m_090113');

      elementShouldBeEnabled('sho_m_090202');
      elementShouldBeEnabled('sho_m_090203');
      elementShouldBeEnabled('sho_m_090204');

      clickElement('sho_m_090106', true, 'checkbox');
      elementShouldBeEnabled('sho_m_090108');
      elementShouldBeEnabled('sho_m_090109');
      elementShouldBeEnabled('sho_m_090110');
      elementShouldBeEnabled('sho_m_090111');
      elementShouldBeEnabled('sho_m_090112');
    });
  });
});
