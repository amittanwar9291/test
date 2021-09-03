import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 06 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Cortex.url + '/' + pageId);
        });
      });
    });
  });

  it('Diffuse Localization I describe', () => {
    // Enabled options
    elementShouldBeEnabled('hea_m_060104');
    elementShouldBeEnabled('hea_m_060113');
    elementShouldBeEnabled('hea_m_060105');

    // Select Finding and Diffuse
    clickElement('hea_m_060105', true, 'radio');
    elementShouldBeEnabled('hea_m_060106-1');

    selectDropdownOptionOS('hea_m_060106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_060107');

    // 'I describe' preselected
    // TODO - should be changed to ID for 'I describe' when added to the source code - bug 22352
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-active')
      .invoke('attr', 'aria-checked')
      .should('equal', 'true');

    // 'I know' enabled
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-default')
      .invoke('attr', 'aria-checked')
      .should('equal', 'false');

    // Localization selected
    elementShouldBeEnabled('hea_m_060202');
    cy.get('rr-diffuse')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');
    cy.get('p-tabview')
      .shadowFind('li:nth-child(1)')
      .should('have.class', 'ui-state-active');

    // Enabled options
    elementShouldBeEnabled('hea_m_040387'); // TODO - change ID to correct one: hea_m_0603201 - bug 22604
    elementShouldBeEnabled('hea_m0605201'); // TODO - change ID to correct one: hea_m_0605201 - bug 22606
    elementShouldBeEnabled('hea_m_0605202');

    elementShouldBeEnabled('hea_m_060503');
    elementShouldBeEnabled('hea_m_060504');

    // Localization cortex/white matter
    // TODO - wrong ID - change ID to correct one: hea_m_0603201 - bug 22604
    clickElement('hea_m_040387', true);

    // 'Parietal lobe'
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Parietal lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('.close-button')
      .click({ force: true });

    elementShouldBeEnabled('hea_m_0604202');
    clickElement('hea_m_0604202', true, 'checkbox');
    cy.byRRID('hea_m_0604202')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');

    // 'Occipital lobe'
    // TODO - change ID to correct one: hea_m_0603201 - bug 22604
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Occipital lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('.close-button')
      .click({ force: true });

    elementShouldBeEnabled('hea_m_0604204');
    clickElement('hea_m_0604204', true, 'checkbox');
    cy.byRRID('hea_m_0604204')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');

    // 'Temporal lobe'
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Temporal lobe ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('.close-button')
      .click({ force: true });

    elementShouldBeEnabled('hea_m_0604207');
    clickElement('hea_m_0604207', true, 'checkbox');
    cy.byRRID('hea_m_0604207')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
    elementShouldBeEnabled('hea_m_0604208');
    clickElement('hea_m_0604208', true, 'checkbox');
    cy.byRRID('hea_m_0604208')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');

    // 'Cerebellum'
    clickElement('hea_m_040387', true);
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('tspan')
      .contains(' Cerebellum ')
      .click();
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('text')
      .should('have.class', 'text-selected');
    cy.get('rr-cortex-localizer-complex')
      .shadowFind('.close-button')
      .click({ force: true });
    elementShouldBeEnabled('hea_m_0604210');
    clickElement('hea_m_0604210', true, 'checkbox');
    cy.byRRID('hea_m_0604210')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
    elementShouldBeEnabled('hea_m_0604211');
    clickElement('hea_m_0604211', true, 'checkbox');
    cy.byRRID('hea_m_0604211')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
    elementShouldBeEnabled('hea_m_0604212');
    clickElement('hea_m_0604212', true, 'checkbox');
    cy.byRRID('hea_m_0604212')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
    elementShouldBeEnabled('hea_m_0604213');
    clickElement('hea_m_0604213', true, 'checkbox');
    cy.byRRID('hea_m_0604213')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');

    // Cortex
    clickElement('hea_m0605201', true, 'checkbox'); // TODO - change ID to correct one: hea_m_0605201 - bug 22606
    cy.byRRID('hea_m0605201')
      .shadowFind('div')
      .should('have.class', 'ui-state-active'); // TODO - change ID to correct one: hea_m_0605201 - bug 22606

    // White matter
    clickElement('hea_m_0605202', true, 'checkbox');
    cy.byRRID('hea_m_0605202')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
    elementShouldBeEnabled('hea_m_0605203');

    // Select from Localization white matter
    selectDropdownOptionOS('hea_m_0605203', 1, true, true);

    // Periventricular
    clickElement('hea_m_060503', true, 'radio');
    cy.byRRID('hea_m_060503')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');

    // Confluent
    clickElement('hea_m_060504', true, 'radio');
    cy.byRRID('hea_m_060504')
      .shadowFind('div')
      .should('have.class', 'ui-state-active');
  });
});
