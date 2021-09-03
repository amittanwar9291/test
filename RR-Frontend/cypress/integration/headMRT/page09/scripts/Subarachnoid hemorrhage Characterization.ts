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

  it('Subarachnoid hemorrhage Characterization', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Subarachnoid hemorrhage from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 3, true, true);
    elementShouldBeEnabled('hea_m_090107');

    // Click on Characterization tab
    cy.byRRID('hea_m_090356').click();
    elementShouldBeEnabled('hea_m_0902106');
    elementShouldBeEnabled('hea_m_090390');
    elementShouldBeEnabled('hea_m_090392');
    elementShouldBeEnabled('hea_m_090394');
    elementShouldBeEnabled('hea_m_090479');
    elementShouldBeEnabled('hea_m_090448');
    elementShouldBeEnabled('hea_m_090449');
    elementShouldBeEnabled('hea_m_090450');
    elementShouldBeEnabled('hea_m_090451');

    // Input fields

    // Move T1w signal slider
    selectSliderValue('hea_m_090390', 0, 3);

    // Move T1w signal slider
    selectSliderValue('hea_m_090392', 0, 3);

    // Move T1w signal slider
    selectSliderValue('hea_m_090394', 0, 3);

    clickElement('hea_m_090479', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090479');
    elementShouldBeEnabled('hea_m_090480');
    elementShouldBeEnabled('hea_m_090481');
    clickElement('hea_m_090480', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090480');
    clickElement('hea_m_090481', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090481');

    clickElement('hea_m_090448', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090448');
    clickElement('hea_m_090449', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090449');
    clickElement('hea_m_090450', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090450');
    clickElement('hea_m_090451', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090451');
  });
});
