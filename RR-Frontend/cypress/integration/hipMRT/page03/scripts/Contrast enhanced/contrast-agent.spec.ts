import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';

context('HipMRT page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Contrast enhanced - Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_x_030204');

      elementShouldBeEnabled('uni_y_030202');
      elementShouldBeEnabled('uni_y_030204');
      elementShouldBeEnabled('uni_x_030301');

      clickElement('uni_y_030202', true, 'checkbox');
      elementShouldBeEnabled('uni_y_030203');

      clickElement('uni_y_030204', true, 'checkbox');
      elementShouldBeEnabled('uni_y_030207');
    });
  });
});
