import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Recommendation surgery', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Rating.url + '/' + pageId);
        });
      });
    });
  });

  describe('Recommendation Surgery', () => {
    it('Surgery', () => {
      clickElement('mam_m_090308', true, 'radio');
      elementShouldBeEnabled('mam_m_090309');
      elementShouldBeEnabled('mam_m_090310');
      clickElement('mam_m_090309', true, 'checkbox');
      clickElement('mam_m_090310', true, 'checkbox');
    });
  });
});
