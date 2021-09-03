import 'cypress-shadow-dom';
import 'cypress-file-upload';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

    // Options enabled
    elementShouldBeEnabled('hea_m_040272');
    elementShouldBeEnabled('hea_m_040273');

    elementShouldBeEnabled('hea_m_040546');
    elementShouldBeEnabled('hea_m_040547');

    elementShouldBeEnabled('hea_m_040550');
    elementShouldBeEnabled('hea_m_040551');
    elementShouldBeEnabled('hea_m_040553');

    // Arterial supply area
    clickElement('hea_m_040272', true, 'radio');
    elementShouldBeEnabled('hea_m_040275');

    // Select Typical areas of infarction from Shape
    selectDropdownOptionOS('hea_m_040275', 1, true, true);
    // TODO - change ID to correct one after bugfix - hea_m_040277
    elementShouldBeEnabled('hea_m_040276'); // hea_m_040277

    cy.wait(500);

    // Select Rare territorial infarcts from Shape
    selectDropdownOptionOS('hea_m_040275', 2, true, true);
    elementShouldBeEnabled('hea_m_040278');
    elementShouldBeEnabled('hea_m_040279');
    elementShouldBeEnabled('hea_m_040280');

    // Select Venous vascular territories
    clickElement('hea_m_040273', true, 'radio');
    elementShouldBeEnabled('hea_m_040282');
    elementShouldBeEnabled('hea_m_040285');
    elementShouldBeEnabled('hea_m_040288');
    elementShouldBeEnabled('hea_m_040289');
    elementShouldBeEnabled('hea_m_040290');
    elementShouldBeEnabled('hea_m_040291');

    // Cortical veins
    clickElement('hea_m_040282', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040283');
    elementShouldBeEnabled('hea_m_040284');

    clickElement('hea_m_040283', true, 'checkbox');
    clickElement('hea_m_040284', true, 'checkbox');

    // Internal cerebral veins
    clickElement('hea_m_040285', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040286');
    elementShouldBeEnabled('hea_m_040287');

    clickElement('hea_m_040286', true, 'checkbox');
    clickElement('hea_m_040287', true, 'checkbox');

    clickElement('hea_m_040288', true, 'checkbox');
    clickElement('hea_m_040289', true, 'checkbox');
    clickElement('hea_m_040290', true, 'checkbox');
    clickElement('hea_m_040291', true, 'checkbox');

    // Select 'Parietal lobe' from 'Localization cortex/white matter
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Parietal lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('#Group_2027')
      .click();
    elementShouldBeEnabled('hea_m_040483');

    clickElement('hea_m_040483', true, 'checkbox');

    // Select 'Occipital lobe' from 'Localization cortex/white matter
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Occipital lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('#Group_2027')
      .click();
    elementShouldBeEnabled('hea_m_040485');
    elementShouldBeEnabled('hea_m_040486');

    clickElement('hea_m_040485', true, 'checkbox');
    clickElement('hea_m_040486', true, 'checkbox');

    // Select 'Occipital lobe' from 'Localization cortex/white matter
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Temporal lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('#Group_2027')
      .click();
    elementShouldBeEnabled('hea_m_040488');
    elementShouldBeEnabled('hea_m_040489');

    clickElement('hea_m_040488', true, 'checkbox');
    clickElement('hea_m_040489', true, 'checkbox');

    // Select 'Cerebellum' from 'Localization cortex/white matter
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Cerebellum ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('#Group_2027')
      .click();
    elementShouldBeEnabled('hea_m_040491');
    elementShouldBeEnabled('hea_m_040492');
    elementShouldBeEnabled('hea_m_040493');
    elementShouldBeEnabled('hea_m_040494');

    clickElement('hea_m_040491', true, 'checkbox');
    clickElement('hea_m_040492', true, 'checkbox');
    clickElement('hea_m_040493', true, 'checkbox');
    clickElement('hea_m_040494', true, 'checkbox');

    // Cortex, White matter
    clickElement('hea_m_040546', true, 'checkbox');
    clickElement('hea_m_040547', true, 'checkbox');
    elementShouldBeEnabled('hea_m_040548');

    // Select from Localizer white matter
    selectDropdownOptionOS('hea_m_040548', 1, true, true);

    // Periventricular, Confluent
    clickElement('hea_m_040550', true, 'radio');
    clickElement('hea_m_040551', true, 'radio');

    // Select from Localization basal ganglia
    clickElement('hea_m_040553', true);
    cy.get('rr-basal-ganglia-locations-complex')
      .shadowFind('tspan')
      .contains(' Thalamus ')
      .click();
    cy.get('rr-basal-ganglia-locations-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-basal-ganglia-locations-complex')
      .shadowFind('.close-button')
      .click();
  });
});
