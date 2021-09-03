import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { shoulderMRTRoutes } from '../../../../../../src/environments/pages-routes';

context('ShoulderMRT page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Contrast enhanced - Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_x_030203');
      elementShouldBeEnabled('uni_x_030204');
      elementShouldBeEnabled('uni_y_030204');
      clickElement('uni_x_030301', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030303-1-1');
      selectDropdownOption('uni_x_030203', 1);
      cy.byRRID('uni_x_030204').type('3');
      clickElement('uni_y_030202', true, 'checkbox');
      elementShouldBeEnabled('uni_y_030203');
      clickElement('uni_y_030203', true, 'checkbox');
      clickElement('uni_y_030204', true, 'checkbox');
      cy.byRRID('uni_y_030207').type('99');
    });
  });
});
