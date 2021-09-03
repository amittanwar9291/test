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

context('Page 04 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Vessels.url + '/' + pageId);
        });
      });
    });
  });

  it('Vascular Malformation', () => {
    // Select Finding
    clickElement('hea_m_040105', true, 'radio');
    elementShouldBeEnabled('hea_m_040106-1');

    // Vascular Malformation
    selectDropdownOptionOS('hea_m_040106-1', 3, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Options enabled
    elementShouldBeEnabled('hea_m_040260');

    elementShouldBeEnabled('hea_m_040375');
    elementShouldBeEnabled('hea_m_040376');
    elementShouldBeEnabled('hea_m_040377');

    elementShouldBeEnabled('hea_m_040474');
    elementShouldBeEnabled('hea_m_040475');
    elementShouldBeEnabled('hea_m_040477');

    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    // Suspicion of
    clickElement('hea_m_040260', true, 'checkbox');

    // Without AV shunt
    clickElement('hea_m_040375', true, 'radio');
    clickElement('hea_m_040376', true, 'radio');
    clickElement('hea_m_040377', true, 'radio');

    // Without AV shunt
    clickElement('hea_m_040474', true, 'radio');
    clickElement('hea_m_040477', true, 'radio');
    clickElement('hea_m_040475', true, 'radio');
    elementShouldBeEnabled('hea_m_040476');
    clickElement('hea_m_040476', true, 'checkbox');

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
