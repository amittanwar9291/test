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
    // Go to Page 3 and select Yes radio button
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');

    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Ventricle configuration from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_090107');

    // Click on Characterization tab
    cy.byRRID('hea_m_090301').click();

    elementShouldBeEnabled('hea_m_090294');
    elementShouldBeEnabled('hea_m_090297');
    elementShouldBeEnabled('hea_m_090298');
    elementShouldBeEnabled('hea_m_090299');
    elementShouldBeEnabled('hea_m_0902100');
    elementShouldBeEnabled('hea_m_090373');
    elementShouldBeEnabled('hea_m_090374');
    elementShouldBeEnabled('hea_m_090375');

    elementShouldBeEnabled('hea_m_090455');
    elementShouldBeEnabled('hea_m_090457');
    elementShouldBeEnabled('hea_m_090460');

    elementShouldBeEnabled('hea_m_090465');
    elementShouldBeEnabled('hea_m_090466');
    elementShouldBeEnabled('hea_m_090513');
    elementShouldBeEnabled('hea_m_090516');

    clickElement('hea_m_090294', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090294');
    elementShouldBeEnabled('hea_m_090296');
    selectDropdownOptionOS('hea_m_090296', '2', true, true);

    clickElement('hea_m_090297', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090297');
    clickElement('hea_m_090298', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090298');
    clickElement('hea_m_090299', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090299');
    clickElement('hea_m_0902100', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_0902100');
    clickElement('hea_m_0902101', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_0902101');
    elementShouldBeEnabled('hea_m_0902102');
    elementShouldBeEnabled('hea_m_0902103');
    clickElement('hea_m_0902102', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_0902102');
    clickElement('hea_m_0902103', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_0902103');

    clickElement('hea_m_090373', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090373');
    clickElement('hea_m_090374', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090374');
    clickElement('hea_m_090375', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090375');
    elementShouldBeEnabled('hea_m_090377');
    elementShouldBeEnabled('hea_m_090378');
    elementShouldBeEnabled('hea_m_090379');
    elementShouldBeEnabled('hea_m_090380');
    elementShouldBeEnabled('hea_m_090381');
    clickElement('hea_m_090377', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090377');
    clickElement('hea_m_090378', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090378');
    clickElement('hea_m_090379', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090379');
    clickElement('hea_m_090380', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090380');
    clickElement('hea_m_090381', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090381');

    // Input fields

    clickElement('hea_m_090460', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090460');
    elementShouldBeEnabled('hea_m_090462');
    // type in input field

    clickElement('hea_m_090465', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090465');
    clickElement('hea_m_090466', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090466');
  });
});
