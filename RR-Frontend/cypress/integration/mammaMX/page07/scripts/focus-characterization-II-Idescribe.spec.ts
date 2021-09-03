import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption,
  selectLocalizerMultiple
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 09 - Ultrasound finding', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_080707', 'mam_mx_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Focus', () => {
    it('Focus -> Characterization II -> I describe', () => {
      elementShouldBeEnabled('mam_mx_030401');
      clickElement('mam_mx_030401', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_030403');
      selectLocalizerMultiple('mam_mx_030403', 'g', 'tspan', 0, 1, true);
      cy.wait(4000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      elementShouldBeEnabled('mam_mx_070105');
      elementShouldBeEnabled('mam_mx_070106-1');
      clickElement('mam_mx_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_mx_070301');
      cy.byRRID('mam_mx_070301').click();
      elementShouldBeEnabled('mam_mx_070213');
      elementShouldBeEnabled('mam_mx_070214');

      elementShouldBeEnabled('mam_mx_070216');
      elementShouldBeEnabled('mam_mx_070217');

      elementShouldBeEnabled('mam_mx_070323');
      elementShouldBeEnabled('mam_mx_070324');
      elementShouldBeEnabled('mam_mx_070325');

      elementShouldBeEnabled('mam_mx_070327');
      elementShouldBeEnabled('mam_mx_070328');
      elementShouldBeEnabled('mam_mx_070329');
      elementShouldBeEnabled('mam_mx_070330');

      elementShouldBeEnabled('mam_mx_070416');
      selectFindingsDropdownOption('mam_mx_070416', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('mam_mx_070417');
      elementShouldBeEnabled('mam_mx_070419');
      elementShouldBeDisabled('mam_mx_070420');
    });
  });
});
