import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption,
  typeValueIntoField
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page03 - Adverse reaction moderatily', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('CM side effects- Moderately severe ', () => {
    it('CM side effects -> Diffuse urticaria ', () => {
      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030301', true, 'checkbox');
      selectFindingsDropdownOption('uni_x_030303-1-1', '.ui-dropdown-trigger', 1, true);
      elementShouldBeEnabled('uni_x_030304');
      elementShouldBeEnabled('uni_x_030409');
      elementShouldBeEnabled('uni_x_030412');
      elementShouldBeEnabled('uni_x_030416');
      elementShouldBeEnabled('uni_x_030406');
      typeValueIntoField('uni_x_030409', '60');
      selectFindingsDropdownOption('uni_x_030412', '.ui-dropdown-label', 2, true, true);
      clickElement('uni_x_030416', true, 'checkbox');
      clickElement('uni_x_030406', true, 'checkbox');
      cy.get('.button-next').click();
    });
  });
});
