import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 03 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast enhanced_Yes.feature', () => {
    it('Contrast enhanced_Yes.feature', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_x_030203');
      elementShouldBeEnabled('uni_x_030204');
      elementShouldBeEnabled('uni_y_030209');
      elementShouldBeEnabled('uni_x_030301');
    });
  });
});
