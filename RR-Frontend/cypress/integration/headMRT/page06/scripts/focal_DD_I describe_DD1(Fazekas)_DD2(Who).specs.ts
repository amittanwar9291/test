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

  it('Focal DD I describe DD1 (Fazekas) DD2 (Who)', () => {
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
    // TODO - should be changed to ID for 'I describe' when added to the source code
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

    // Select Microangiopathy from DD1
    selectDropdownOptionOS('hea_m_060248', 30, false, true);
    cy.get('p-dropdown')
      .find('span')
      .contains('Microangiopathy');
    elementShouldBeEnabled('hea_m_060249');

    // elementShouldBeEnabled('hea_m_060251');     // TODO - DUPLICATE ID (Localization and DD tabs)
    elementShouldBeEnabled('hea_m_060341');
    cy.wait(1000);

    // TODO - ISSUE - cannot select from the dropdown, the steps are skipped
    // TODO - DUPLICATE ID (Localization and DD tabs)
    // Select Grade 1 from Fazekas scale
    selectDropdownOptionOS('hea_m_060251', 1, true, true);
    cy.get('p-dropdown')
      .find('span')
      .contains('Grade 1');

    // Select 'Glioma' from 'Differential diagnosis 2'
    selectDropdownOptionOS('hea_m_060341', 1, true, true);
    cy.get('p-dropdown')
      .find('span')
      .contains('Glioma');
    elementShouldBeEnabled('hea_m_060342');
    elementShouldBeEnabled('hea_m_060345');
    elementShouldBeEnabled('hea_m_060439');

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
