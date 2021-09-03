import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page03 - Individually without', () => {
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

  describe('Sequences', () => {
    it('Individually without CM -> No', () => {
      cy.byRRID('uni_x_030110').click();
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030210-1');
      elementShouldBeEnabled('uni_x_030509');
      elementShouldBeEnabled('uni_x_030511');
      elementShouldBeEnabled('uni_y_030502');
      elementShouldBeEnabled('uni_x_030520');
      elementShouldBeEnabled('uni_x_030521');
      selectFindingsDropdownOption('uni_x_030210-1', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('uni_x_030421');
      elementShouldBeEnabled('uni_x_030211');
      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      elementShouldBeEnabled('uni_x_030314');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeDisabled('uni_x_030414');
      elementShouldBeDisabled('uni_x_030415');
      elementShouldBeDisabled('uni_x_030420');
    });
  });
});
