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

  it('Mass Characterization I - I describe', () => {
    // Page 3: Select DWI
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.overlay').click();
    selectDropdownOptionOS('uni_x_030210-1', '2', true, true);

    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Mass from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_090107');
    /* elementShouldBeEnabled('hea_m_090111');
    elementShouldBeEnabled('hea_m_090112'); */

    // Click I describe radio button
    // clickElement('hea_m_090111', true, 'radio');

    // Click on Characterization I tab
    cy.byRRID('hea_m_090321').click();
    elementShouldBeEnabled('hea_m_090245');
    elementShouldBeEnabled('hea_m_090337');
    elementShouldBeEnabled('hea_m_090340');
    elementShouldBeEnabled('hea_m_090341');
    elementShouldBeEnabled('hea_m_090343');
    elementShouldBeEnabled('hea_m_090344');
    elementShouldBeEnabled('hea_m_090345');
    elementShouldBeEnabled('hea_m_090346');
    elementShouldBeEnabled('hea_m_090347');
    elementShouldBeEnabled('hea_m_090433');
    elementShouldBeEnabled('hea_m_090435');
    elementShouldBeEnabled('hea_m_090437');
    elementShouldBeEnabled('hea_m_090531');
    elementShouldBeEnabled('hea_m_090535');

    // Enter 1 in 'Size' input field

    cy.byRRID('hea_m_090245').type('1');
    elementShouldBeEnabled('hea_m_090248');

    // Enter 99 in 'Size' input field

    cy.byRRID('hea_m_090245')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_090248');

    // Enter 1 in '2nd plane' input field

    cy.byRRID('hea_m_090248').type('1');
    elementShouldBeEnabled('hea_m_090251');

    // Enter 99 in '2nd plane' input field

    cy.byRRID('hea_m_090248')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_090251');

    // Enter 1 in '3rd plane' input field

    cy.byRRID('hea_m_090251').type('1');

    // Enter 99 in '3rd plane' input field

    cy.byRRID('hea_m_090251')
      .clear()
      .type('99');

    // Check Margin radio buttons
    clickElement('hea_m_090337', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090337');
    clickElement('hea_m_090338', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090338');

    // Check Homogeneity radio buttons
    clickElement('hea_m_090340', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090340');
    clickElement('hea_m_090341', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090341');

    // Check Shape radio buttons
    clickElement('hea_m_090343', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090343');
    clickElement('hea_m_090344', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090344');
    clickElement('hea_m_090345', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090345');
    clickElement('hea_m_090346', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090346');
    clickElement('hea_m_090347', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090347');

    // Move T1w signal slider
    selectSliderValue('hea_m_090433', 0, 3);

    // Move T2w signal slider
    selectSliderValue('hea_m_090435', 0, 2);

    // Move FLAIR signal slider
    selectSliderValue('hea_m_090437', 0, 1);

    // Select T2* signal/SWI
    clickElement('hea_m_090531', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090531');
    elementShouldBeEnabled('hea_m_090532');
    elementShouldBeEnabled('hea_m_090533');
    clickElement('hea_m_090532', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090532');
    clickElement('hea_m_090533', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090533');

    // Diffusion restriction checkbox
    clickElement('hea_m_090535', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090535');
  });
});
