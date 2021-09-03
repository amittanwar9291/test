import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { elbowMRTRoutes } from '@environments/pages-routes';

context('Page 03 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Contrast agent', () => {
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030301', true, 'checkbox');

    clickElement('uni_y_030202', true, 'checkbox');
    elementShouldBeEnabled('uni_y_030203');
    elementShouldBeEnabled('uni_y_030204');
    clickElement('uni_y_030204', true, 'checkbox');
    elementShouldBeEnabled('uni_y_030207');
  });
});
