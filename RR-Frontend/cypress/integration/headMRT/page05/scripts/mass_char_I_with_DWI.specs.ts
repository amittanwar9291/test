import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 05 - headMRT', () => {
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

  it('Mass Characterization I with DWI', () => {
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

    // Go to Page 05
    NavigationPageObject.visitPageNumber(5);

    // Select Finding
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    // Select Mass
    selectDropdownOptionOS('hea_m_050106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_050107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Characterization I
    clickElement('hea_m_050301', true);
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-1-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled options column 2
    elementShouldBeEnabled('hea_m_050214');
    elementShouldBeEnabled('hea_m_050223');
    elementShouldBeEnabled('hea_m_050224');
    elementShouldBeEnabled('hea_m_050225');
    elementShouldBeEnabled('hea_m_050226');

    // Enabled options column 3
    elementShouldBeEnabled('hea_m_050309');
    elementShouldBeEnabled('hea_m_050310');
    elementShouldBeEnabled('hea_m_050312');
    elementShouldBeEnabled('hea_m_050313');
    elementShouldBeEnabled('hea_m_050314');
    elementShouldBeEnabled('hea_m_050315');

    // Enabled options column 4
    elementShouldBeEnabled('hea_m_0504201');
    elementShouldBeEnabled('hea_m_0504203');
    elementShouldBeEnabled('hea_m_0504205');

    // Enabled options column 5
    elementShouldBeEnabled('hea_m_0505201');
    elementShouldBeEnabled('hea_m_0505205');
    elementShouldBeEnabled('hea_m_0505207');
    elementShouldBeEnabled('hea_m_0505209');

    // Enter 1 in the input field 'Size*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050214')
      .type('1')
      .clear();

    // Enter 999 in the input field 'Size*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '999');
    cy.byRRID('hea_m_050214').type('999');
    elementShouldBeEnabled('hea_m_050217');

    // Enter 1 in the input field '2nd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050217')
      .type('1')
      .clear();

    // Enter 999 in the input field '2nd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '999');
    cy.byRRID('hea_m_050217').type('999');
    elementShouldBeEnabled('hea_m_050220');

    // Enter 1 in the input field '3rd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050220')
      .type('1')
      .clear();

    // Enter 999 in the input field '3rd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '999');
    cy.byRRID('hea_m_050220').type('999');

    clickElement('hea_m_050223', true, 'radio');
    clickElement('hea_m_050224', true, 'radio');
    clickElement('hea_m_050225', true, 'radio');
    clickElement('hea_m_050226', true, 'radio');

    // Select options in column 3
    clickElement('hea_m_050309', true, 'radio');
    clickElement('hea_m_050310', true, 'radio');
    clickElement('hea_m_050312', true, 'radio');
    clickElement('hea_m_050313', true, 'radio');
    clickElement('hea_m_050314', true, 'radio');
    clickElement('hea_m_050315', true, 'radio');

    // Select options in column 4

    // Slider T1w signal
    selectSliderValueAndCheckIt('hea_m_0504201', 0, 5);

    // Slider T2w signal
    selectSliderValueAndCheckIt('hea_m_0504203', 0, 5);

    // Slider FLAIR signal
    selectSliderValueAndCheckIt('hea_m_0504205', 0, 5);

    // Select options in column 5
    clickElement('hea_m_0505201', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0505202');
    elementShouldBeEnabled('hea_m_0505203');

    clickElement('hea_m_0505202', true, 'radio');
    clickElement('hea_m_0505203', true, 'radio');

    // Slider DWI signal
    selectSliderValueAndCheckIt('hea_m_0505205', 0, 3);

    // Slider ADC signal
    selectSliderValueAndCheckIt('hea_m_0505207', 0, 3);

    clickElement('hea_m_0505209', true, 'checkbox');
  });
});
