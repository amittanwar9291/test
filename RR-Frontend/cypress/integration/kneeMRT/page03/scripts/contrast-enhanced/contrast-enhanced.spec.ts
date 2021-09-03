import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { kneeMRTRoutes } from '../../../../../../src/environments/pages-routes';

context('Knee page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Contrast enhanced - Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_x_030203');
      elementShouldBeEnabled('uni_x_030204');
      elementShouldBeEnabled('uni_y_030202');
      elementShouldBeEnabled('uni_y_030204');
      clickElement('uni_y_030202', true, 'checkbox');
      elementShouldBeEnabled('uni_y_030203');
      clickElement('uni_y_030204', true, 'checkbox');
      elementShouldBeEnabled('uni_y_030207');
      selectDropdownOption('uni_x_030203', 1);
      cy.byRRID('uni_x_030204').type('3');
    });
  });
});
