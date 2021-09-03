import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
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
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary -> TN-Staging', () => {
      elementShouldBeEnabled('tho_c_090306');
      clickElement('tho_c_090306', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090308');
      elementShouldBeEnabled('tho_c_090309');

      clickElement('tho_c_090308', true, 'radio');
      elementShouldBeEnabled('tho_c_090311');
      elementShouldBeEnabled('tho_c_090313');

      clickElement('tho_c_090309', true, 'radio');
      elementShouldBeEnabled('tho_c_090315');
      elementShouldBeEnabled('tho_c_090316');
    });
  });
});
