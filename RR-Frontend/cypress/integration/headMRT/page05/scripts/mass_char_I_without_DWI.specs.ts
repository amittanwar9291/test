import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Head MRT - Page 5', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Meninges.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Characterization I without DWI', () => {
    // Select Finding
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    // Select Mass
    selectDropdownOptionOS('hea_m_050106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_050107');
    // TODO - implement when ID is added in the source code 'I describe'
    // elementShouldBeEnabled('hea_m_050111');

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

    // Signal void
    clickElement('hea_m_0505201', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0505202');
    elementShouldBeEnabled('hea_m_0505203');

    clickElement('hea_m_0505202', true, 'radio');
    clickElement('hea_m_0505203', true, 'radio');
  });
});
