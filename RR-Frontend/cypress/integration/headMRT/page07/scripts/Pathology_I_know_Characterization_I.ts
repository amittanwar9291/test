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

context('Page 07 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_070107', 'hea_m_070106-');
  const findingColumn2 = new FindingColumnPageObject('uni_x_030211', 'uni_x_030210-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BasalNuclei.url + '/' + pageId);
        });
      });
    });
  });

  it('Pathology Localization - I describe', () => {
    // Page 3: Contrast enhanced - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.overlay').click();
    findingColumn2.selectFindingOptionByAppearance(2);

    // Page 7
    NavigationPageObject.visitPageNumber(7);

    // Select Pathology from the dropdown menu
    clickElement('hea_m_070105', true, 'radio');
    elementShouldBeEnabled('hea_m_070106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_070107');
    /* elementShouldBeEnabled('hea_m_070111');
    elementShouldBeEnabled('hea_m_070112'); */

    // Click I know radio button
    // clickElement('hea_m_070112', true, 'radio');

    // Click on Characterization I tab
    cy.byRRID('hea_m_070301').click();
    elementShouldBeEnabled('hea_m_070214');
    elementShouldBeEnabled('hea_m_070314');
    elementShouldBeEnabled('hea_m_070315');
    elementShouldBeEnabled('hea_m_070317');
    elementShouldBeEnabled('hea_m_070318');
    elementShouldBeEnabled('hea_m_070320');
    elementShouldBeEnabled('hea_m_070321');
    elementShouldBeEnabled('hea_m_070322');
    elementShouldBeEnabled('hea_m_070323');
    elementShouldBeEnabled('hea_m_070324');
    elementShouldBeEnabled('hea_m_070409');
    elementShouldBeEnabled('hea_m_070411');
    elementShouldBeEnabled('hea_m_070413');
    elementShouldBeEnabled('hea_m_070415');
    elementShouldBeEnabled('hea_m_070514');
    elementShouldBeEnabled('hea_m_070516');
    elementShouldBeEnabled('hea_m_070518');
    elementShouldBeEnabled('hea_m_070520');
    elementShouldBeEnabled('hea_m_070521');
    elementShouldBeEnabled('hea_m_070522');

    // Enter 1 in 'Size' input field

    cy.byRRID('hea_m_070214').type('1');
    elementShouldBeEnabled('hea_m_070217');

    // Enter 99 in 'Size' input field

    cy.byRRID('hea_m_070214')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_070217');

    // Enter 1 in '2nd plane' input field

    cy.byRRID('hea_m_070217').type('1');
    elementShouldBeEnabled('hea_m_070220');

    // Enter 99 in '2nd plane' input field

    cy.byRRID('hea_m_070217')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_070220');

    // Enter 1 in '3rd plane' input field

    cy.byRRID('hea_m_070220').type('1');

    // Enter 99 in '3rd plane' input field

    cy.byRRID('hea_m_070220')
      .clear()
      .type('99');

    // Check Margin radio buttons
    clickElement('hea_m_070314', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070314');
    clickElement('hea_m_070315', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070315');

    // Check Margin radio buttons
    clickElement('hea_m_070317', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070317');
    clickElement('hea_m_070318', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070318');

    // Check Shape radio buttons
    clickElement('hea_m_070320', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070320');
    clickElement('hea_m_070321', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070321');
    clickElement('hea_m_070322', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070322');
    clickElement('hea_m_070323', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070323');
    clickElement('hea_m_070324', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070324');

    // Move T1w signal slider
    selectSliderValue('hea_m_070409', 0, 3);

    // Move T2w signal slider
    selectSliderValue('hea_m_070411', 0, 2);

    // Move FLAIR signal slider
    selectSliderValue('hea_m_070413', 0, 1);

    // Select T2* signal/SWI
    clickElement('hea_m_070415', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070415');
    elementShouldBeEnabled('hea_m_070416');
    elementShouldBeEnabled('hea_m_070417');
    clickElement('hea_m_070416', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070416');
    clickElement('hea_m_070417', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070417');

    // Move DWI signal slider
    selectSliderValue('hea_m_070514', 0, 3);

    // Move ADC signal slider
    selectSliderValue('hea_m_070516', 0, 2);

    // Diffusion restriction checkbox
    clickElement('hea_m_070518', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070518');

    // Check Dominant finding radio buttons
    clickElement('hea_m_070520', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070520');
    clickElement('hea_m_070521', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070521');
    clickElement('hea_m_070522', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070522');
  });
});
