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

context('Page 08 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BrainstemCranialNerves.url + '/' + pageId);
        });
      });
    });
  });

  it('Brainstem Characterization I - I describe', () => {
    // Page 3: Select DWI
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.overlay').click();
    selectDropdownOptionOS('uni_x_030210-1', '2', true, true);

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Brainstem from the dropdown menu
    clickElement('hea_m_080106', true, 'radio');
    elementShouldBeEnabled('hea_m_080107-1');
    selectDropdownOptionOS('hea_m_080107-1', 0, true, true);
    elementShouldBeEnabled('hea_m_080108');
    /* elementShouldBeEnabled('hea_m_080112');
    elementShouldBeEnabled('hea_m_080113'); */

    // Click I describe radio button
    // clickElement('hea_m_080112', true, 'radio');

    // Click on Characterization I tab
    cy.byRRID('hea_m_080301').click();
    elementShouldBeEnabled('hea_m_080213');
    elementShouldBeEnabled('hea_m_080321');
    elementShouldBeEnabled('hea_m_080322');
    elementShouldBeEnabled('hea_m_080324');
    elementShouldBeEnabled('hea_m_080325');
    elementShouldBeEnabled('hea_m_080327');
    elementShouldBeEnabled('hea_m_080328');
    elementShouldBeEnabled('hea_m_080329');
    elementShouldBeEnabled('hea_m_080330');
    elementShouldBeEnabled('hea_m_080331');
    elementShouldBeEnabled('hea_m_080421');
    elementShouldBeEnabled('hea_m_080423');
    elementShouldBeEnabled('hea_m_080425');
    elementShouldBeEnabled('hea_m_080427');
    elementShouldBeEnabled('hea_m_080513');
    elementShouldBeEnabled('hea_m_080515');
    elementShouldBeEnabled('hea_m_080517');

    // Enter 1 in 'Size' input field

    cy.byRRID('hea_m_080213').type('1');
    elementShouldBeEnabled('hea_m_080216');

    // Enter 99 in 'Size' input field

    cy.byRRID('hea_m_080213')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_080216');

    // Enter 1 in '2nd plane' input field

    cy.byRRID('hea_m_080216').type('1');
    elementShouldBeEnabled('hea_m_080219');

    // Enter 99 in '2nd plane' input field

    cy.byRRID('hea_m_080216')
      .clear()
      .type('99');
    elementShouldBeEnabled('hea_m_080219');

    // Enter 1 in '3rd plane' input field

    cy.byRRID('hea_m_080219').type('1');

    // Enter 99 in '3rd plane' input field

    cy.byRRID('hea_m_080219')
      .clear()
      .type('99');

    // Check Margin radio buttons
    clickElement('hea_m_080321', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080321');
    clickElement('hea_m_080322', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080322');

    // Check Margin radio buttons
    clickElement('hea_m_080324', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080324');
    clickElement('hea_m_080325', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080325');

    // Check Shape radio buttons
    clickElement('hea_m_080327', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080327');
    clickElement('hea_m_080328', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080328');
    clickElement('hea_m_080329', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080329');
    clickElement('hea_m_080330', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080330');
    clickElement('hea_m_080331', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080331');

    // Move T1w signal slider
    selectSliderValue('hea_m_080421', 0, 3);

    // Move T2w signal slider
    selectSliderValue('hea_m_080423', 0, 2);

    // Move FLAIR signal slider
    selectSliderValue('hea_m_080425', 0, 1);

    // Select T2* signal/SWI
    clickElement('hea_m_080427', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080427');
    elementShouldBeEnabled('hea_m_080428');
    elementShouldBeEnabled('hea_m_080429');
    clickElement('hea_m_080428', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080428');
    clickElement('hea_m_080429', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080429');

    // Move DWI signal slider
    selectSliderValue('hea_m_080513', 0, 3);

    // Move ADC signal slider
    selectSliderValue('hea_m_080515', 0, 2);

    // Diffusion restriction checkbox
    clickElement('hea_m_080517', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080517');
  });
});
