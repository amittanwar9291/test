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

  it('Ischemia Vascular occlusion', () => {
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

    // Vascular occlusion
    clickElement('hea_m_040501', true);
    elementShouldBeEnabled('hea_m_040229');

    // Vascular occlusion
    clickElement('hea_m_040229', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040231');
    elementShouldBeEnabled('hea_m_040232');
    elementShouldBeEnabled('hea_m_040234');
    elementShouldBeEnabled('hea_m_040235');
    elementShouldBeEnabled('hea_m_040237');

    elementShouldBeEnabled('hea_m_040322');
    elementShouldBeEnabled('hea_m_040323');
    elementShouldBeEnabled('hea_m_040324');
    elementShouldBeEnabled('hea_m_040325');
    elementShouldBeEnabled('hea_m_040327');
    elementShouldBeEnabled('hea_m_040328');

    elementShouldBeEnabled('hea_m_040433');
    elementShouldBeEnabled('hea_m_040435');
    elementShouldBeEnabled('hea_m_040438');

    elementShouldBeEnabled('hea_m_040515');
    elementShouldBeEnabled('hea_m_040516');
    elementShouldBeEnabled('hea_m_040517');
    elementShouldBeEnabled('hea_m_040518');
    elementShouldBeEnabled('hea_m_040519');
    elementShouldBeEnabled('hea_m_040520');

    // Localization
    clickElement('hea_m_040231', true);
    cy.get('rr-arteries-segments-big-localizer')
      .shadowFind('tspan')
      .contains(' ACA – Ant. cerebral artery ')
      .click();
    cy.get('rr-arteries-segments-big-localizer')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-arteries-segments-big-localizer')
      .shadowFind('#closeCircle')
      .click({ force: true });

    // Enabled checkboxes
    clickElement('hea_m_040232', true, 'checkbox');
    clickElement('hea_m_040234', true, 'checkbox');
    clickElement('hea_m_040235', true, 'checkbox');

    // Longitudinal expansion of thrombus
    typeValueIntoInputField('hea_m_040237', '1');
    checkInputFieldValue('hea_m_040237', 1);
    cy.byRRID('hea_m_040237').clear();

    typeValueIntoInputField('hea_m_040237', '99');
    checkInputFieldValue('hea_m_040237', 99);

    // Collateral circulation
    clickElement('hea_m_040322', true, 'radio');
    clickElement('hea_m_040323', true, 'radio');
    clickElement('hea_m_040324', true, 'radio');
    clickElement('hea_m_040325', true, 'radio');

    clickElement('hea_m_040327', true, 'checkbox');
    clickElement('hea_m_040328', true, 'checkbox');

    // Extracranial
    clickElement('hea_m_040433', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040434');

    clickElement('hea_m_040434', true, 'checkbox');

    clickElement('hea_m_040435', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040436');
    elementShouldBeEnabled('hea_m_040437');

    clickElement('hea_m_040436', true, 'checkbox');
    clickElement('hea_m_040437', true, 'checkbox');

    clickElement('hea_m_040438', true, 'checkbox');

    // Information on thrombectomy
    clickElement('hea_m_040515', true, 'checkbox');
    clickElement('hea_m_040516', true, 'checkbox');
    clickElement('hea_m_040517', true, 'checkbox');
    clickElement('hea_m_040518', true, 'checkbox');
    clickElement('hea_m_040519', true, 'checkbox');
    clickElement('hea_m_040520', true, 'checkbox');
  });
});
