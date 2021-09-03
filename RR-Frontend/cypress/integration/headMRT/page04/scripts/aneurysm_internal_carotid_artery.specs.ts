import 'cypress-shadow-dom';
import 'cypress-file-upload';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  typeValueIntoInputField,
  checkInputFieldValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 04 - HeadMRT', () => {
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

  it('Aneurysm internal carotid artery', () => {
    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Go to Page 04
    NavigationPageObject.visitPageNumber(4);

    // Select Finding
    clickElement('hea_m_040105', true, 'radio');
    elementShouldBeEnabled('hea_m_040106-1');

    // Aneurysm
    selectDropdownOptionOS('hea_m_040106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Enabled options
    elementShouldBeEnabled('hea_m_040256');
    elementShouldBeEnabled('hea_m_040257');
    elementShouldBeEnabled('hea_m_040258');
    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    // Select 'Internal carotid artery'
    clickElement('hea_m_040258', true, 'radio');
    elementShouldBeEnabled('hea_m_040364');
    elementShouldBeEnabled('hea_m_040365');
    elementShouldBeEnabled('hea_m_040367');
    elementShouldBeEnabled('hea_m_040457');
    elementShouldBeEnabled('hea_m_040459');
    elementShouldBeEnabled('hea_m_040468');
    elementShouldBeEnabled('hea_m_040472');

    elementShouldBeEnabled('hea_m_040526');
    elementShouldBeEnabled('hea_m_040533');
    elementShouldBeEnabled('hea_m_040535');
    elementShouldBeEnabled('hea_m_040536');
    elementShouldBeEnabled('hea_m_040538');

    // Click localizer
    clickElement('hea_m_040367', true);
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('tspan')
      .contains('C1')
      .click();
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('text')
      .should('have.class', 'selected-text');
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('tspan')
      .contains('C2')
      .click();
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('text')
      .should('have.class', 'selected-text');
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('text')
      .contains('C1')
      .should('not.have.class', 'selected-text');
    cy.get('rr-carotid-artery-big-localizer')
      .shadowFind('#closeCircle')
      .click({ force: true });

    // Select from Shape
    selectDropdownOptionOS('hea_m_040457', 2, true, true);

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Input field 'Extension aneurysm'
    typeValueIntoInputField('hea_m_040459', '1');
    checkInputFieldValue('hea_m_040459', 1);
    cy.byRRID('hea_m_040459').clear();

    typeValueIntoInputField('hea_m_040459', '60');
    elementShouldBeEnabled('hea_m_040462');

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Input field '2nd plane'
    typeValueIntoInputField('hea_m_040462', '1');
    checkInputFieldValue('hea_m_040462', 1);
    cy.byRRID('hea_m_040462').clear();

    typeValueIntoInputField('hea_m_040462', '60');
    checkInputFieldValue('hea_m_040462', 60);
    elementShouldBeEnabled('hea_m_040465');

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Input field '3rd plane'
    typeValueIntoInputField('hea_m_040465', '1');
    checkInputFieldValue('hea_m_040465', 1);
    cy.byRRID('hea_m_040465').clear();

    typeValueIntoInputField('hea_m_040465', '60');
    checkInputFieldValue('hea_m_040465', 60);

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Input field 'Aneurysm neck width'
    typeValueIntoInputField('hea_m_040468', '1');
    checkInputFieldValue('hea_m_040468', 1);
    cy.byRRID('hea_m_040468').clear();

    typeValueIntoInputField('hea_m_040468', '10');
    checkInputFieldValue('hea_m_040468', 10);

    // Select 'Subarachnoid hemorrhage'
    clickElement('hea_m_040526', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040527');
    elementShouldBeEnabled('hea_m_040528');
    elementShouldBeEnabled('hea_m_040530');
    elementShouldBeEnabled('hea_m_040531');
    elementShouldBeEnabled('hea_m_040532');

    // Select 'Thrombosis'
    clickElement('hea_m_040533', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040534');

    clickElement('hea_m_040535');
    clickElement('hea_m_040536');

    // Select from Differential diagnosis
    selectDropdownOptionOS('hea_m_040538', 2, true, true);

    // 'Serial number'
    typeValueIntoInputField('uni_04_003', '123456789012');
    checkInputFieldValue('uni_04_003', 123456789012);

    // 'Image number'
    typeValueIntoInputField('uni_04_005', '123456789012');
    checkInputFieldValue('uni_04_005', 123456789012);

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Upload image to 'Import reference image'
    cy.get('rr-uploader')
      .shadowFind('input')
      .as('inputImage');
    cy.get('@inputImage').attachFile('sample.png');
    cy.get('rr-uploader')
      .shadowFind('.file-name')
      .contains('sample');

    // Preview uploaded image
    cy.get('.uploader-action-icons')
      .shadowFind('div:nth-child(1)')
      .click();
    cy.get('rr-image-dialog')
      .shadowFind('.image-dialog-close')
      .click();

    // Delete uploaded image
    cy.get('.uploader-action-icons')
      .shadowFind('div:nth-child(2)')
      .click();
    cy.get('.ui-dialog-content')
      .shadowFind('.dialog-button-confirm')
      .click({ force: true });
    cy.get('.uploader-container')
      .shadowFind('div')
      .should('have.class', 'label-bullet');
  });
});
