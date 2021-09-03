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

  it('Ischemia area II', () => {
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

    // Ischemia
    selectDropdownOptionOS('hea_m_040106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Tabs enabled
    elementShouldBeEnabled('hea_m_040301');
    elementShouldBeEnabled('hea_m_040401');
    elementShouldBeEnabled('hea_m_040501');

    // Ischemia area II
    clickElement('hea_m_040401', true);

    elementShouldBeEnabled('hea_m_040227');
    elementShouldBeEnabled('hea_m_040228');

    elementShouldBeEnabled('hea_m_040314');
    elementShouldBeEnabled('hea_m_040315');
    elementShouldBeEnabled('hea_m_040316');
    elementShouldBeEnabled('hea_m_040317');
    elementShouldBeEnabled('hea_m_040318');
    elementShouldBeEnabled('hea_m_040319');

    elementShouldBeEnabled('hea_m_040423');
    elementShouldBeEnabled('hea_m_040424');
    elementShouldBeEnabled('hea_m_040427');

    elementShouldBeEnabled('hea_m_040427');
    elementShouldBeEnabled('hea_m_040428');
    elementShouldBeEnabled('hea_m_040429');
    elementShouldBeEnabled('hea_m_040430');
    elementShouldBeEnabled('hea_m_040431');

    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    // Contrast enhancement
    clickElement('hea_m_040227', true, 'radio');
    clickElement('hea_m_040228', true, 'radio');

    // Infarct stage
    clickElement('hea_m_040314', true, 'radio');
    clickElement('hea_m_040315', true, 'radio');
    clickElement('hea_m_040316', true, 'radio');
    clickElement('hea_m_040317', true, 'radio');
    clickElement('hea_m_040318', true, 'radio');
    clickElement('hea_m_040319', true, 'radio');

    // Associated findings
    clickElement('hea_m_040423', true, 'checkbox');
    clickElement('hea_m_040424', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040425');
    elementShouldBeEnabled('hea_m_040426');

    clickElement('hea_m_040425', true, 'checkbox');
    clickElement('hea_m_040426', true, 'checkbox');

    clickElement('hea_m_040427', true, 'checkbox');
    clickElement('hea_m_040428', true, 'checkbox');
    clickElement('hea_m_040429', true, 'checkbox');
    clickElement('hea_m_040430', true, 'checkbox');
    clickElement('hea_m_040431', true, 'checkbox');

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
