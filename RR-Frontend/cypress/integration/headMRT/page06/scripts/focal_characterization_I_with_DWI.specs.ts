import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  checkInputFieldValue,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 06 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Focal Characterization I without DWI', () => {
    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Select Sequences - Individual
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    elementShouldBeEnabled('uni_x_030210-1');

    // Select DWI
    selectDropdownOptionOS('uni_x_030210-1', 2, true, true);

    // Go to Page 06
    NavigationPageObject.visitPageNumber(6);

    // Enabled options
    elementShouldBeEnabled('hea_m_060104');
    elementShouldBeEnabled('hea_m_060113');
    elementShouldBeEnabled('hea_m_060105');

    // Select Finding and Focal
    clickElement('hea_m_060105', true, 'radio');
    elementShouldBeEnabled('hea_m_060106-1');

    selectDropdownOptionOS('hea_m_060106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_060107');

    // Localization is preselected
    cy.get('rr-focal')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // 'I describe' preselected
    // TODO - should be changed to ID for 'I describe' when added to the source code - ID is not implemented
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-active')
      .invoke('attr', 'aria-checked')
      .should('equal', 'true');

    // Localization selected
    elementShouldBeEnabled('hea_m_060202');
    cy.get('rr-focal')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Char I
    clickElement('hea_m_060301', true);
    cy.get('p-tabview')
      .shadowFind('#ui-tabpanel-1-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled elements
    elementShouldBeEnabled('hea_m_060218');

    // Circumscribed + 3 checkboxes
    elementShouldBeEnabled('hea_m_060227');
    elementShouldBeEnabled('hea_m_060228');
    elementShouldBeEnabled('hea_m_060229');
    elementShouldBeEnabled('hea_m_060230');

    // Homogeneous, Heterogeneous
    elementShouldBeEnabled('hea_m_060315');
    elementShouldBeEnabled('hea_m_060316');

    // Round, + 6 checkboxes
    elementShouldBeEnabled('hea_m_060318');
    elementShouldBeEnabled('hea_m_060319');
    elementShouldBeEnabled('hea_m_060320');
    elementShouldBeEnabled('hea_m_060321');
    elementShouldBeEnabled('hea_m_060322');
    elementShouldBeEnabled('hea_m_060323');
    elementShouldBeEnabled('hea_m_060324');

    // T1w signal + 2 sliders
    elementShouldBeEnabled('hea_m_060421');
    elementShouldBeEnabled('hea_m_060423');
    elementShouldBeEnabled('hea_m_060425');

    // DWI signal, ADC signal, Diffusion imaging
    elementShouldBeEnabled('hea_m_060510');
    elementShouldBeEnabled('hea_m_060512');
    elementShouldBeEnabled('hea_m_060514');

    // Check input field Size* (1 and 99)
    cy.byRRID('hea_m_060218').type('1');
    checkInputFieldValue('hea_m_060218', 1);
    elementShouldBeEnabled('hea_m_060221');
    cy.byRRID('hea_m_060218').clear();

    cy.byRRID('hea_m_060218').type('99');
    checkInputFieldValue('hea_m_060218', 99);
    elementShouldBeEnabled('hea_m_060221');

    // Check input field 2nd plane (1 and 99)
    cy.byRRID('hea_m_060221').type('1');
    checkInputFieldValue('hea_m_060221', 1);
    elementShouldBeEnabled('hea_m_060224');
    cy.byRRID('hea_m_060221').clear();

    cy.byRRID('hea_m_060221').type('99');
    checkInputFieldValue('hea_m_060221', 99);
    elementShouldBeEnabled('hea_m_060224');

    // Check input field 3rd plane (1 and 99)
    cy.byRRID('hea_m_060224').type('1');
    checkInputFieldValue('hea_m_060224', 1);
    cy.byRRID('hea_m_060224').clear();

    cy.byRRID('hea_m_060224').type('99');
    checkInputFieldValue('hea_m_060224', 99);

    // T1w signal
    selectSliderValueAndCheckIt('hea_m_060421', 0, 5);

    // T2w signal
    selectSliderValueAndCheckIt('hea_m_060423', 0, 5);

    // FLAIR signal
    selectSliderValueAndCheckIt('hea_m_060425', 0, 5);

    // Signal void
    clickElement('hea_m_060506', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060507');
    elementShouldBeEnabled('hea_m_060508');

    // Calcification, blood
    clickElement('hea_m_060507', true, 'radio');
    clickElement('hea_m_060508', true, 'radio');

    // DWI signal
    selectSliderValueAndCheckIt('hea_m_060510', 0, 3);

    // ADC signal
    selectSliderValueAndCheckIt('hea_m_060512', 0, 3);

    // Diffusion imaging
    clickElement('hea_m_060514', true, 'checkbox');
  });
});
