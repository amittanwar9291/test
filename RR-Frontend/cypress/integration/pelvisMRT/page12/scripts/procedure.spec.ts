import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 12 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Summary -> procedure', () => {
      elementShouldBeEnabled('pel_m_120106');
      elementShouldBeEnabled('pel_m_120104');
      elementShouldBeEnabled('pel_m_120114');
      elementShouldBeEnabled('pel_m_120117');

      clickElement('pel_m_120106', true, 'radio');
      elementShouldBeEnabled('pel_m_120108');
      elementShouldBeEnabled('pel_m_120109');
      elementShouldBeEnabled('pel_m_120110');
      elementShouldBeEnabled('pel_m_120111');
      elementShouldBeEnabled('pel_m_120112');
      elementShouldBeEnabled('pel_m_120113');

      clickElement('pel_m_120114', true, 'checkbox');
      elementShouldBeEnabled('pel_m_120115');
      elementShouldBeEnabled('pel_m_120116');
    });
  });
});
