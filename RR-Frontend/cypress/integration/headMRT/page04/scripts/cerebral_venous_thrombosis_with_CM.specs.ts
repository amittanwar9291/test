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

  it('Cerebral venous thrombosis with CM', () => {
    // CE Yes
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Go to Page 04
    NavigationPageObject.visitPageNumber(4);

    // Select Finding
    clickElement('hea_m_040105', true, 'radio');
    elementShouldBeEnabled('hea_m_040106-1');

    // Cerebral venosis thrombosis
    selectDropdownOptionOS('hea_m_040106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Enabled options
    elementShouldBeEnabled('hea_m_04_10');
    elementShouldBeEnabled('hea_m_040389');
    elementShouldBeEnabled('hea_m_040390');
    elementShouldBeEnabled('hea_m_040555');
    elementShouldBeEnabled('hea_m_040557');
    elementShouldBeEnabled('hea_m_040558');

    elementShouldBeEnabled('hea_m_040560');

    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    // Click localizer
    clickElement('hea_m_040293', true);
    cy.get('rr-cerebral-venous-thrombosis-localizer-complex')
      .shadowFind('tspan')
      .contains(' Superior sagittal sinus ')
      .click();
    cy.get('rr-cerebral-venous-thrombosis-localizer-complex')
      .shadowFind('tspan')
      .contains(' Inferior sagittal sinus ')
      .click();
    cy.get('rr-cerebral-venous-thrombosis-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cerebral-venous-thrombosis-localizer-complex')
      .shadowFind('.close-button')
      .click();

    // 'Thrombus detection'
    clickElement('hea_m_040389', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040392');
    elementShouldBeEnabled('hea_m_040393');
    elementShouldBeEnabled('hea_m_040394');
    elementShouldBeEnabled('hea_m_040395');

    elementShouldBeEnabled('hea_m_040496');
    elementShouldBeEnabled('hea_m_040497');

    elementShouldBeEnabled('hea_m_0404102');
    elementShouldBeEnabled('hea_m_0404103');
    elementShouldBeEnabled('hea_m_0404104');

    // Empty delta sign
    clickElement('hea_m_040397', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040398');

    // Complete
    clickElement('hea_m_040497', true, 'radio');
    elementShouldBeEnabled('hea_m_040499');

    // TODO - Replace input fields check with: inputFieldMinMaxCheck
    // Input field 'Min. diameter residual lumen'
    typeValueIntoInputField('hea_m_040499', '1');
    checkInputFieldValue('hea_m_040499', 1);
    cy.byRRID('hea_m_040499').clear();

    typeValueIntoInputField('hea_m_040499', '9');
    checkInputFieldValue('hea_m_040499', 9);

    // Congestive hemorrhage
    clickElement('hea_m_040555', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040556');

    // 'Serial number'
    typeValueIntoInputField('uni_04_003', '123456789012');
    checkInputFieldValue('uni_04_003', 123456789012);

    // 'Image number'
    typeValueIntoInputField('uni_04_005', '123456789012');
    checkInputFieldValue('uni_04_005', 123456789012);

    // TODO - Replace below code with uploadPreviewDeleteImage():
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
    cy.get('.image-dialog-container')
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
