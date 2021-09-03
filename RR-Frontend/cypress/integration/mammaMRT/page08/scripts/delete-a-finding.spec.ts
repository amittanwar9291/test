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

context('Page 08 - Delete a finding', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones -> delete a finding', () => {
    it('select bones lesion -> Clavicle', () => {
      clickElement('mam_m_080105', true, 'radio');
      elementShouldBeEnabled('mam_m_080106-1');
      selectFindingsDropdownOption('mam_m_080106-1', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_m_080107');
      elementShouldBeEnabled('mam_m_080203');
      elementShouldBeEnabled('mam_m_080204');
      elementShouldBeEnabled('mam_m_080205');
      elementShouldBeEnabled('mam_m_080207');
      elementShouldBeEnabled('mam_m_080208');
      cy.byRRID('mam_m_080107').click();
      elementShouldBeEnabled('mam_m_080106-2');
      elementShouldBeDisabled('mam_m_080107');
      selectFindingsDropdownOption('mam_m_080106-2', '.ui-dropdown-label', 5, true, true);
      elementShouldBeEnabled('mam_m_080106-1');
      elementShouldBeEnabled('mam_m_080107');
    });
  });
});
