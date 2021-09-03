import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 04 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Medical History Female', () => {
    // Go to Page 01 and select Female radio button

    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');

    // Go to Page 02
    NavigationPageObject.visitPageNumber(2);

    // Medical History tab is preselected

    elementShouldBeEnabled('pel_m_020202');
    elementShouldBeEnabled('pel_m_020302');

    elementShouldBeEnabled('pel_m_020402');
    elementShouldBeEnabled('pel_m_020403');
    elementShouldBeEnabled('pel_m_020404');
    elementShouldBeEnabled('pel_m_020405');

    elementShouldBeEnabled('pel_m_020407');
    elementShouldBeEnabled('pel_m_020408');
    elementShouldBeEnabled('pel_m_020409');

    elementShouldBeEnabled('pel_m_020504');

    // Click on Therapy checkbox
    clickElement('pel_m_020202', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020203');
    elementShouldBeEnabled('pel_m_020208');

    // Click on Radiotherapy checkbox
    clickElement('pel_m_020203');
    elementShouldBeEnabled('pel_m_020204');
    elementShouldBeEnabled('pel_m_020205');

    clickElement('pel_m_020204');
    clickElement('pel_m_020205', true, 'radio');
    elementShouldBeEnabled('pel_m_020206');
    elementShouldBeEnabled('pel_m_020207');
    selectDropdownOptionOS('pel_m_020206', 3, true, true);
    selectDropdownOptionOS('pel_m_020207', 3, true, true);

    // Click on Hormone-ablative checkbox
    clickElement('pel_m_020208');
    elementShouldBeEnabled('pel_m_020209');
    elementShouldBeEnabled('pel_m_020210');

    clickElement('pel_m_020209');
    clickElement('pel_m_020210', true, 'radio');
    elementShouldBeEnabled('pel_m_020211');
    elementShouldBeEnabled('pel_m_020212');
    selectDropdownOptionOS('pel_m_020211', 8, true, true);
    selectDropdownOptionOS('pel_m_020212', 1, true, true);

    // Click on Neoadjuvant therapy checkbox
    clickElement('pel_m_020302');
    elementShouldBeEnabled('pel_m_020303');
    elementShouldBeEnabled('pel_m_020304');
    elementShouldBeEnabled('pel_m_020307');
    elementShouldBeEnabled('pel_m_020308');

    clickElement('pel_m_020303', true, 'radio');
    clickElement('pel_m_020304', true, 'radio');
    elementShouldBeEnabled('pel_m_020305');
    elementShouldBeEnabled('pel_m_020306');
    selectDropdownOptionOS('pel_m_020305', 8, true, true);
    selectDropdownOptionOS('pel_m_020306', 1, true, true);
    clickElement('pel_m_020307', true, 'checkbox');
    clickElement('pel_m_020308', true, 'checkbox');

    // Click on Parity radio buttons
    clickElement('pel_m_020402', true, 'radio');
    clickElement('pel_m_020403', true, 'radio');
    clickElement('pel_m_020404', true, 'radio');
    clickElement('pel_m_020405', true, 'radio');

    // Click on Cycle anomalies checkboxes
    clickElement('pel_m_020407', true, 'checkbox');
    clickElement('pel_m_020408', true, 'checkbox');
    clickElement('pel_m_020409', true, 'checkbox');

    // 5th column
    clickElement('pel_m_020504', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020505');
    elementShouldBeEnabled('pel_m_020506');
    clickElement('pel_m_020505', true, 'radio');
    clickElement('pel_m_020506', true, 'radio');
  });
});
