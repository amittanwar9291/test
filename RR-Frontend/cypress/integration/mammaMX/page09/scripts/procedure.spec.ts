import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Procedure -> Biopsy', () => {
    it('Biopsy', () => {
      selectFindingsDropdownOption('mam_mx_090502', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_mx_090504');
      elementShouldBeEnabled('mam_mx_090505');
      elementShouldBeEnabled('mam_mx_090506');
      elementShouldBeEnabled('mam_mx_090507');
      elementShouldBeEnabled('mam_mx_090509');
      elementShouldBeEnabled('mam_mx_090510');
      elementShouldBeEnabled('mam_mx_090513');
      clickElement('mam_mx_090510', true, 'radio');
      elementShouldBeEnabled('mam_mx_090511');
      clickElement('mam_mx_090511', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_090512');

      selectFindingsDropdownOption('mam_mx_090502', '.ui-dropdown-label', 7, true, true);
      elementShouldBeEnabled('mam_mx_090515');
      elementShouldBeEnabled('mam_mx_090519');
      elementShouldBeEnabled('mam_mx_090523');
      clickElement('mam_mx_090515', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_090516');
      selectFindingsDropdownOption('mam_mx_090516', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_mx_090518');
      clickElement('mam_mx_090519', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_090520');
      selectFindingsDropdownOption('mam_mx_090520', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_mx_090522');
      clickElement('mam_mx_090523', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_090524');
    });
  });
});
