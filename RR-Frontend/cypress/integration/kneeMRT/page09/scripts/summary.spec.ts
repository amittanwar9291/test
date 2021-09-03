import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });
  describe('Summary of Knee MRI', () => {
    it('Follow-up', () => {
      clickElement('kne_m_090107', true, 'checkbox');
      elementShouldBeEnabled('kne_m_090109');
      elementShouldBeEnabled('kne_m_090110');
      elementShouldBeEnabled('kne_m_090111');
      elementShouldBeEnabled('kne_m_090112');
      elementShouldBeEnabled('kne_m_090113');
    });
  });
});
