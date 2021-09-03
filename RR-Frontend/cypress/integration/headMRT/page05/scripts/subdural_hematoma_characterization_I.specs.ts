import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import {
  buttonShouldBeEnabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt
} from '../../../../shared/service';
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

  it('Subdural hematoma Characterization I', () => {
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

    // Select Subdural hematoma
    selectDropdownOptionOS('hea_m_050106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_050107');
    buttonShouldBeEnabled('hea_m_050107');

    // Characterization I is preselected
    clickElement('hea_m_050272', true);

    // Enabled options column 2
    elementShouldBeEnabled('hea_m_050274');
    elementShouldBeEnabled('hea_m_050275');
    elementShouldBeEnabled('hea_m_050276');

    elementShouldBeEnabled('hea_m_050278');
    elementShouldBeEnabled('hea_m_050279');
    elementShouldBeEnabled('hea_m_050280');
    elementShouldBeEnabled('hea_m_050281');
    elementShouldBeEnabled('hea_m_050282');

    // Enabled options column 3
    elementShouldBeEnabled('hea_m_050346');
    elementShouldBeEnabled('hea_m_050347');
    elementShouldBeEnabled('hea_m_050348');

    elementShouldBeEnabled('hea_m_050351');
    elementShouldBeEnabled('hea_m_050354');
    elementShouldBeEnabled('hea_m_050356');
    elementShouldBeEnabled('hea_m_050357');

    // Enabled options column 4
    elementShouldBeEnabled('hea_m_050452');
    elementShouldBeEnabled('hea_m_050455');
    elementShouldBeEnabled('hea_m_050457');

    // Enabled options column 5
    elementShouldBeEnabled('hea_m_050521');
    elementShouldBeEnabled('hea_m_050525');

    // Select options column 2
    clickElement('hea_m_050274', true, 'checkbox');
    clickElement('hea_m_050275', true, 'checkbox');
    clickElement('hea_m_050276', true, 'checkbox');

    clickElement('hea_m_050278', true, 'checkbox');
    clickElement('hea_m_050279', true, 'checkbox');
    clickElement('hea_m_050280', true, 'checkbox');
    clickElement('hea_m_050281', true, 'checkbox');
    clickElement('hea_m_050282', true, 'checkbox');

    // Select options column 3
    clickElement('hea_m_050346', true, 'checkbox');
    clickElement('hea_m_050347', true, 'checkbox');
    clickElement('hea_m_050348', true, 'checkbox');

    // Enter 1 in the input field 'Max. width'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050351')
      .type('1')
      .clear();

    // Enter 99 in the input field 'Max. width'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '99');
    cy.byRRID('hea_m_050351').type('99');

    /*
    // Input field 'Max. width'
    typeValueIntoInputField('hea_m_050351', 1);
    checkInputFieldValue('hea_m_050351', 1);

    typeValueIntoInputField('hea_m_050351', 99);
    checkInputFieldValue('hea_m_050351', 99);
     */

    // Enter 1 in the input field '2nd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050354')
      .type('1')
      .clear();

    // Enter 250 in the input field '2nd plane'
    cy.get('[labelrrid="hea_m_050355"] > .rr-number-input > .rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '250');
    cy.byRRID('hea_m_050354').type('250');

    /*
    // Input field '2nd plane'
    typeValueIntoInputField('hea_m_050354', 1);
    checkInputFieldValue('hea_m_050354', 1);

    typeValueIntoInputField('hea_m_050354', 250);
    checkInputFieldValue('hea_m_050354', 250);
    */

    clickElement('hea_m_050356', true, 'checkbox');
    clickElement('hea_m_050357', true, 'checkbox');

    /*
    Select sliders column 4
    Slider T1w signal
    checkSliderValue('hea_m_050452', 5);
    */
    selectSliderValueAndCheckIt('hea_m_050452', 0, 5);

    /*
    Slider T2w signal
    checkSliderValue('hea_m_050455', 5);
    */
    selectSliderValueAndCheckIt('hea_m_050455', 0, 5);

    /*
    Slider FLAIR signal
    checkSliderValue('hea_m_050457', 5);
     */
    selectSliderValueAndCheckIt('hea_m_050457', 0, 5);

    // Select sliders column 5
    // TODO - 'Calcification' radio button wrong ID - should be changed to 'hea_m_050522' (bug 22392)
    clickElement('hea_m_050521', true, 'checkbox');
    elementShouldBeEnabled('ea_m_050522');
    elementShouldBeEnabled('hea_m_050523');

    clickElement('ea_m_050522', true, 'radio');
    clickElement('hea_m_050523', true, 'radio');

    clickElement('hea_m_050525', true, 'checkbox');
  });
});
