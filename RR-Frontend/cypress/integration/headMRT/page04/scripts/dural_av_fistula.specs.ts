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

  it('Dural AV fistula', () => {
    // Select Finding
    clickElement('hea_m_040105', true, 'radio');
    elementShouldBeEnabled('hea_m_040106-1');

    // Cerebral venosis thrombosis
    selectDropdownOptionOS('hea_m_040106-1', 4, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Enabled options
    elementShouldBeEnabled('hea_m_040263');
    elementShouldBeEnabled('hea_m_040264');
    elementShouldBeEnabled('hea_m_040266');
    elementShouldBeEnabled('hea_m_040267');
    elementShouldBeEnabled('hea_m_040268');
    elementShouldBeEnabled('hea_m_040269');
    elementShouldBeEnabled('hea_m_040270');

    elementShouldBeEnabled('hea_m_040379');
    elementShouldBeEnabled('hea_m_040380');
    elementShouldBeEnabled('hea_m_040381');
    elementShouldBeEnabled('hea_m_040382');
    elementShouldBeEnabled('hea_m_040383');
    elementShouldBeEnabled('hea_m_040384');

    elementShouldBeEnabled('hea_m_040479');

    // TODO - change to correct IDs after bugfix - bug 22497
    elementShouldBeEnabled('hea_m_040540'); // hea_m_0404107
    elementShouldBeEnabled('hea_m_040541'); // hea_m_0404108
    elementShouldBeEnabled('hea_m_040542'); // hea_m_0404109
    elementShouldBeEnabled('hea_m_040543'); // hea_m_0404110

    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    // Reverse flow
    clickElement('hea_m_040479', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040480');

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
