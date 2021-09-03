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
    it('Summary -> Dynamic Findings', () => {
      elementShouldBeEnabled('pel_m_120202');
      elementShouldBeEnabled('pel_m_120203');
      elementShouldBeEnabled('pel_m_120204');
      elementShouldBeEnabled('pel_m_120205');

      clickElement('pel_m_120205', true, 'radio');
      elementShouldBeEnabled('pel_m_120302');
      elementShouldBeEnabled('pel_m_120303');
      elementShouldBeEnabled('pel_m_120304');
      elementShouldBeEnabled('pel_m_120305');
      elementShouldBeEnabled('pel_m_120306');
    });
  });
});
