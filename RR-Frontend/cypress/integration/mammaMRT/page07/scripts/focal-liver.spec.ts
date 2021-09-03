import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Focal liver', () => {
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

  describe('SELECT radio button "benign"', () => {
    it('THEN radio buttons "cyst" and "hemangioma" are enabled', () => {
      clickElement('mam_m_070306');
      elementShouldBeEnabled('mam_m_070307');
      elementShouldBeEnabled('mam_m_070308');
      elementShouldBeEnabled('mam_m_070311');

      clickElement('mam_m_070310');
      elementShouldBeEnabled('mam_m_070311');
    });
  });
});
