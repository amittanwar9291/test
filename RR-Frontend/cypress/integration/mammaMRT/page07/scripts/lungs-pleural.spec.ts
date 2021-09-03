import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Lungs pleural', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Lymphs.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT Pleural effusion', () => {
    it('THEN right and left is enabled', () => {
      clickElement('mam_m_070404');
      elementShouldBeEnabled('mam_m_070405');
      elementShouldBeEnabled('mam_m_0704101');
    });

    it('WHEN right is checked "slightly" and "significant" is enabled', () => {
      clickElement('mam_m_0704100');
      elementShouldBeEnabled('mam_m_070411');
      elementShouldBeEnabled('mam_m_070412');
    });

    it('WHEN left is checked "slightly" and "significant" is enabled', () => {
      clickElement('mam_m_0704101', true, 'checkbox');
      elementShouldBeEnabled('mam_m_070414');
      elementShouldBeEnabled('mam_m_070415');
    });

    it('AND "Consolidation" and "Atelectasis" is enabled', () => {
      elementShouldBeEnabled('mam_m_070502');
      elementShouldBeEnabled('mam_m_070503');
    });
  });
});
