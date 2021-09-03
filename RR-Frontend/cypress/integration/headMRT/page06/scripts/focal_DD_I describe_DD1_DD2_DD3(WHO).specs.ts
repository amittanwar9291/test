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

  it('Focal DD I describe DD3 (WHO)', () => {
    // Enabled options
    elementShouldBeEnabled('hea_m_060104');
    elementShouldBeEnabled('hea_m_060113');
    elementShouldBeEnabled('hea_m_060105');

    // Select Finding and Focal
    clickElement('hea_m_060105', true, 'radio');
    elementShouldBeEnabled('hea_m_060106-1');

    selectDropdownOptionOS('hea_m_060106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_060107');

    // Localization is preselected
    cy.get('rr-focal')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // 'I describe' preselected
    // TODO - should be changed to ID for 'I describe' when added to the source code - bug 22352 - ID not implemented
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-active')
      .invoke('attr', 'aria-checked')
      .should('equal', 'true');

    // Localization selected
    elementShouldBeEnabled('hea_m_060401');

    // Select DD
    clickElement('hea_m_060501', true);
    cy.get('rr-focal')
      .find('li:nth-child(4)')
      .should('have.class', 'ui-state-active')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled elements
    elementShouldBeEnabled('hea_m_060248');
    elementShouldBeEnabled('hea_m_060528');

    // Select Astrocytoma from DD1
    selectDropdownOptionOS('hea_m_060248', 5, false, true);
    cy.get('p-dropdown')
      .find('span')
      .contains('Astrocytoma');
    elementShouldBeEnabled('hea_m_060249');
    // TODO - ISSUE - hea_m_060253 - DUPLICATE ID (Localization and DD tabs)
    // elementShouldBeEnabled('hea_m_060253');

    /*
    // Select Grade III from WHO (1)
    // TODO - ISSUE - Not possible to select an option from WHO dropdown
    selectDropdownOptionOS('hea_m_060253', 3, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container > .ng-tns-c58-18').find('span').contains( 'Grade III');
     */

    // Select 'Glioblastoma' from 'Differential diagnosis 2'
    selectDropdownOptionOS('hea_m_060341', 6, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container')
      .find('span')
      .contains('Glioblastoma');
    elementShouldBeEnabled('hea_m_060342');
    // TODO - wrong ID at WHO dropdown under DD2 (correct ID hea_m_060346) - bug 22674
    elementShouldBeEnabled('hea_m_060345');
    elementShouldBeEnabled('hea_m_060439');

    // Select Grade I from WHO (2)
    // TODO - wrong ID at WHO dropdown under DD2 (correct ID hea_m_060346) - bug 22674
    selectDropdownOptionOS('hea_m_060345', 2, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container')
      .find('span')
      .contains('Grade II');

    // Select 'Glioma' from 'Differential diagnosis 3'
    selectDropdownOptionOS('hea_m_060439', 1, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container')
      .find('span')
      .contains('Glioma');
    elementShouldBeEnabled('hea_m_060341');
    elementShouldBeEnabled('hea_m_060443');

    // Select Grade II from WHO (3)
    selectDropdownOptionOS('hea_m_060443', 2, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container')
      .find('span')
      .contains('Grade II');

    // > 1 lesion of the same entity
    clickElement('hea_m_060528', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060530');
    elementShouldBeEnabled('hea_m_060531');
    elementShouldBeEnabled('hea_m_060533');
    elementShouldBeEnabled('hea_m_060534');
    elementShouldBeEnabled('hea_m_060535');
    elementShouldBeEnabled('hea_m_060536');
    elementShouldBeEnabled('hea_m_060537');
  });
});
