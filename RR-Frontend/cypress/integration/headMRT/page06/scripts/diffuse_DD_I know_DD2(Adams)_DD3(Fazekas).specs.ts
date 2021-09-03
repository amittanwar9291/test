import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, elementShouldBeDisabled } from '../../../../shared/service';
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

  it('Diffuse DD I know DD2 (Adams) DD3 (Fazekas)', () => {
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

    // Select I know
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

    // Localization selected
    elementShouldBeEnabled('hea_m_060202');
    cy.get('rr-diffuse')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select 'Encephalitis' from 'Differential diagnosis 1'
    // TODO - wrong ID at DD1* Localization - correct -> hea_m_060254 - bug 22704;
    selectDropdownOptionOS('hea_m_060204', 18, true, true);
    elementShouldBeEnabled('hea_m_060205');

    // Select Histology
    clickElement('hea_m_060205', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060206');
    elementShouldBeEnabled('hea_m_060207');

    // Select DD tab
    clickElement('hea_m_060501', true);
    cy.get('p-tabview')
      .shadowFind('li:nth-child(4)')
      .should('have.class', 'ui-state-active');

    // DD1 disabled, Fazekas disabled, 'Modified classification according to Adams et al.' disabled
    elementShouldBeDisabled('hea_m_060248'); // TODO - wrong ID at 'DD1*' - correct ID -> hea_m_060286 - bug 22692
    elementShouldBeDisabled('hea_m_060251'); // TODO - DUPLICATE ID with the same DD at Localization tab
    elementShouldBeDisabled('hea_m_060288'); // Adams

    // DD2 enabled, '> 1 lesion of the same entity' enabled
    elementShouldBeEnabled('hea_m_060341'); // TODO - wrong ID at 'DD2' - correct ID -> hea_m_060377 - bug 22698
    elementShouldBeEnabled('hea_m_060528');

    // Select 'Diffuse axonal injury' from 'Differential diagnosis 2'
    selectDropdownOptionOS('hea_m_060341', 30, true, true); // TODO - wrong ID at 'DD2' - correct ID -> hea_m_060377 - bug 22698
    elementShouldBeEnabled('hea_m_060342');
    elementShouldBeEnabled('hea_m_060439'); // TODO - wrong ID at 'DD3' - correct ID -> hea_m_060473 - bug 22698

    // Select 'Microangiopathy' from 'Differential diagnosis 3'
    selectDropdownOptionOS('hea_m_060439', 13, true, true); // TODO - wrong ID at 'DD3' - correct ID -> hea_m_060473 - bug 22698
    elementShouldBeEnabled('hea_m_060441');

    // Select '> 1 lesion of the same entity'
    clickElement('hea_m_060528', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060530');
    elementShouldBeEnabled('hea_m_060531');
    elementShouldBeEnabled('hea_m_060533');
    elementShouldBeEnabled('hea_m_060535');
    elementShouldBeEnabled('hea_m_060536');
    elementShouldBeEnabled('hea_m_060537');
  });
});
