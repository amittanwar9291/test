import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectFindingsDropdownOption,
  selectLocalizerElement,
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
    it('Characterization I -> I know', () => {
      clickElement('mam_mx_030401', true, 'checkbox');
      selectLocalizerMultiple('mam_mx_030403', 'g', 'tspan', 0, 1, true);

      cy.wait(4000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      elementShouldBeEnabled('mam_mx_070105');
      elementShouldBeEnabled('mam_mx_070106-1');
      clickElement('mam_mx_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_mx_070107');
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('mam_mx_070204');
      elementShouldBeEnabled('mam_mx_070209');
      elementShouldBeEnabled('mam_mx_070210');

      elementShouldBeEnabled('mam_mx_070315');
      elementShouldBeEnabled('mam_mx_070316');
      elementShouldBeEnabled('mam_mx_070317');

      elementShouldBeEnabled('mam_mx_070306');
      elementShouldBeEnabled('mam_mx_070309');
      elementShouldBeEnabled('mam_mx_070312');
      elementShouldBeEnabled('mam_mx_070319');

      elementShouldBeEnabled('mam_mx_070402');
      elementShouldBeEnabled('mam_mx_070403');
      elementShouldBeEnabled('mam_mx_070405');
      elementShouldBeEnabled('mam_mx_070406');
      elementShouldBeEnabled('mam_mx_070412');
      elementShouldBeEnabled('mam_mx_070413');

      elementShouldBeEnabled('mam_mx_070502');
      elementShouldBeEnabled('mam_mx_070503');
      elementShouldBeEnabled('mam_mx_070504');
      elementShouldBeEnabled('mam_mx_070505');
      elementShouldBeEnabled('mam_mx_070506');

      elementShouldBeEnabled('mam_mx_070508');
      elementShouldBeEnabled('mam_mx_070509');
      elementShouldBeEnabled('mam_mx_070510');
      elementShouldBeEnabled('mam_mx_070511');

      selectFindingsDropdownOption('mam_mx_070204', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_mx_070205');
      clickElement('mam_mx_070205', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_070206');
      elementShouldBeEnabled('mam_mx_070207');

      selectLocalizerElement('mam_mx_070209', 'path', 10, true);

      selectLocalizerElement('mam_mx_070209', 'path', 15, true);

      elementShouldBeEnabled('mam_mx_070406');
      clickElement('mam_mx_070406', true, 'radio');
      elementShouldBeEnabled('mam_mx_070407');
      elementShouldBeEnabled('mam_mx_070408');
      elementShouldBeEnabled('mam_mx_070409');
      elementShouldBeEnabled('mam_mx_070410');
    });
  });
});
