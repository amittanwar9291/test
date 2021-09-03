import 'cypress-shadow-dom';
import 'cypress-file-upload';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  checkSliderValue,
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue,
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

  it('Ischemia area I - DWI', () => {
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

    // Go to Page 4
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

    // Ischemia area I
    clickElement('hea_m_040301', true);
    elementShouldBeEnabled('hea_m_040214');
    elementShouldBeEnabled('hea_m_040215');
    elementShouldBeEnabled('hea_m_040216');
    elementShouldBeEnabled('hea_m_040217');
    elementShouldBeEnabled('hea_m_040221');

    elementShouldBeEnabled('hea_m_040303');
    elementShouldBeEnabled('hea_m_040304');
    elementShouldBeEnabled('hea_m_040308');
    elementShouldBeEnabled('hea_m_040309');
    elementShouldBeEnabled('hea_m_040311');
    elementShouldBeEnabled('hea_m_040312');

    elementShouldBeEnabled('hea_m_040417');
    elementShouldBeEnabled('hea_m_040418');
    elementShouldBeEnabled('hea_m_040419');
    elementShouldBeEnabled('hea_m_040421');

    elementShouldBeEnabled('hea_m_040503');
    elementShouldBeEnabled('hea_m_040504');
    elementShouldBeEnabled('hea_m_040505');

    // Lacunary
    clickElement('hea_m_040214', true, 'radio');
    elementShouldBeEnabled('hea_m_040218');
    elementShouldBeEnabled('hea_m_040219');

    clickElement('hea_m_040218', true, 'checkbox');
    clickElement('hea_m_040219', true, 'checkbox');

    // Territorial
    clickElement('hea_m_040215', true, 'radio');
    elementShouldBeEnabled('hea_m_040222');
    elementShouldBeEnabled('hea_m_040223');
    elementShouldBeEnabled('hea_m_040224');

    clickElement('hea_m_040222', true, 'checkbox');
    clickElement('hea_m_040223', true, 'checkbox');
    clickElement('hea_m_040224', true, 'checkbox');

    // Border zone
    clickElement('hea_m_040216', true, 'radio');
    elementShouldBeEnabled('hea_m_040225');

    clickElement('hea_m_040225', true, 'checkbox');

    // Signal T2 FLAIR
    selectSliderValue('hea_m_040221', 0, 3);
    checkSliderValue('hea_m_040221', 3);

    // No diffusion restriction
    clickElement('hea_m_040303', true, 'radio');

    // Diffusion restriction
    clickElement('hea_m_040304', true, 'radio');
    elementShouldBeEnabled('hea_m_040305');
    elementShouldBeEnabled('hea_m_040306');

    clickElement('hea_m_040305', true, 'radio');
    clickElement('hea_m_040306', true, 'radio');

    // DWI signal Increased, Decreased
    clickElement('hea_m_040308', true, 'radio');
    clickElement('hea_m_040309', true, 'radio');

    // ADC Map Increased, Decreased
    clickElement('hea_m_040311', true, 'radio');
    clickElement('hea_m_040312', true, 'radio');

    // FLAIR/DWI ratio
    clickElement('hea_m_040417', true, 'radio');
    clickElement('hea_m_040418', true, 'radio');
    clickElement('hea_m_040419', true, 'radio');

    // T1w signal
    selectSliderValue('hea_m_040421', 0, 3);
    checkSliderValue('hea_m_040421', 3);

    // MR perfusion
    clickElement('hea_m_040503', true, 'radio');
    clickElement('hea_m_040505', true, 'radio');
    clickElement('hea_m_040504', true, 'radio');
    elementShouldBeEnabled('hea_m_040506');
    elementShouldBeEnabled('hea_m_040507');
    elementShouldBeEnabled('hea_m_040508');
    elementShouldBeEnabled('hea_m_040509');

    clickElement('hea_m_040509', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040512');

    // Input field 'Penumbra (tissue at risk)'
    typeValueIntoInputField('hea_m_040512', '1');
    checkInputFieldValue('hea_m_040512', 1);
    cy.byRRID('hea_m_040512').clear();

    typeValueIntoInputField('hea_m_040512', '100');
    checkInputFieldValue('hea_m_040512', 100);
  });
});
