import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, elementShouldBeEnabled, clickElement } from '../../../../../../shared/service';
import { signIn } from '../../../../../../shared/requests';
import { createReport } from '../../../../../../shared/report-creation';
import { testUser } from '../../../../../../shared/test-usert';

context('Page 3 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  describe('Adverse reaction_Light', () => {
    it('Adverse reaction_Light', () => {
      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030301', true, 'checkbox');

      elementShouldBeEnabled('uni_x_030514');
      elementShouldBeEnabled('uni_x_030515');
      elementShouldBeEnabled('uni_x_030516');
      elementShouldBeEnabled('uni_x_030517');
      elementShouldBeEnabled('uni_x_030518');
      elementShouldBeEnabled('uni_x_030519');
    });
  });
});
