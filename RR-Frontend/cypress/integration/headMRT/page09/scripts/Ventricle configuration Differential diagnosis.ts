import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_CerebrospinalFluidSpace.url + '/' + pageId);
        });
      });
    });
  });

  it('Ventricle configuration Characterization', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Ventricle configuration from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_090107');

    // Click on Differential diagnosis tab
    cy.byRRID('hea_m_090401').click();

    elementShouldBeEnabled('hea_m_090232');

    selectDropdownOptionOS('hea_m_090232', 2, true, true);
    elementShouldBeEnabled('hea_m_090233');
    elementShouldBeEnabled('hea_m_090235');

    clickElement('hea_m_090233', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090233');

    selectDropdownOptionOS('hea_m_090235', 1, true, true);
    elementShouldBeEnabled('hea_m_090236');

    clickElement('hea_m_090236', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090236');
  });
});
