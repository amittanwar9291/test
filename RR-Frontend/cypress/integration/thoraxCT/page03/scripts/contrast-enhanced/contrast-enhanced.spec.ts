import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { thoraxCTRoutes } from '../../../../../../src/environments/pages-routes';

context('Thorax CT-page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Contrast enhanced - Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_xc_030202');
      elementShouldBeEnabled('uni_xc_030204');
      elementShouldBeEnabled('uni_y_030209');
      clickElement('uni_x_030301', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030303-1-1');
      selectDropdownOption('uni_x_030303-1-1', 1);
    });
  });
});
