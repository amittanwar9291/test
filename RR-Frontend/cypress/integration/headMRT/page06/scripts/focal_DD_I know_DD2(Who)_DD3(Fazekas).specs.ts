import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Focal DD I know DD2 (WHO) DD3 (Fazekas)', () => {
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
    // TODO - should be changed to ID for 'I describe' when added to the source code - ID not implemented
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-active')
      .invoke('attr', 'aria-checked')
      .should('equal', 'true');

    // Select I know
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

    // Localization enabled
    elementShouldBeEnabled('hea_m_060401');

    // Select Metastasis from DD1
    selectDropdownOptionOS('hea_m_060204', 30, false, true);
    cy.get('p-dropdown')
      .find('span')
      .contains('Microangiopathy');
    elementShouldBeEnabled('hea_m_060205');

    // Select 'Histology known'
    clickElement('hea_m_060205', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060206');
    elementShouldBeEnabled('hea_m_060207');

    // Select DD
    clickElement('hea_m_060501', true);
    cy.get('rr-focal')
      .find('li:nth-child(4)')
      .should('have.class', 'ui-state-active')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Disabled elements
    elementShouldBeDisabled('hea_m_060248');
    elementShouldBeDisabled('hea_m_060251');
    // TODO - ISSUE - pointer event are set to 'auto'
    // elementShouldBeDisabled('hea_m_060253');

    // DD2 enabled
    elementShouldBeEnabled('hea_m_060341');
    elementShouldBeEnabled('hea_m_060528');

    /*
    TODO - ISSUE - does not select option from the dropdown
    // Select 'Microangiopathy' from 'Differential diagnosis 2'
    selectDropdownOptionOS('hea_m_060341', 27, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container').find('span').contains( 'Microangiopathy');
    elementShouldBeEnabled('hea_m_060342');
    elementShouldBeEnabled('hea_m_060344');
    elementShouldBeEnabled('hea_m_060439')
     */

    // Select 'Glioma' from 'Differential diagnosis 3'
    selectDropdownOptionOS('hea_m_060439', 1, true, true);
    cy.get('p-dropdown > div > .ui-dropdown-label-container')
      .find('span')
      .contains('Glioma');
    elementShouldBeEnabled('hea_m_060443');

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
