import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { cardioMRTRoutes } from '@environments/pages-routes';

context('Cardio page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Contrast enhanced - Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      elementShouldBeEnabled('uni_x_030203');
      elementShouldBeEnabled('uni_x_030204');
      elementShouldBeEnabled('uni_y_030212');
      clickElement('uni_x_030301', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030303-1-1');
      elementShouldBeEnabled('uni_x_030514');
      elementShouldBeEnabled('uni_x_030515');
      elementShouldBeEnabled('uni_x_030516');
      elementShouldBeEnabled('uni_x_030517');
      elementShouldBeEnabled('uni_x_030518');
      elementShouldBeEnabled('uni_x_030519');
      elementShouldBeEnabled('uni_x_030507');
      selectDropdownOption('uni_x_030203', 1);
      selectDropdownOption('uni_y_030212', 1);
      cy.byRRID('uni_x_030204').type('3');
    });
  });
});
