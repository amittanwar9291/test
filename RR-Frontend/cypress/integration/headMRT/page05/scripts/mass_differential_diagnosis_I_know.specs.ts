import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Meninges.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Differential diagnosis I describe', () => {
    // Select Finding
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    // Select Mass
    selectDropdownOptionOS('hea_m_050106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_050107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select I know
    // TODO - replace workaround with ID for 'I know'
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();
    elementShouldBeEnabled('hea_m_050204');

    // Select option in DD1*
    selectDropdownOptionOS('hea_m_050204', 4, true, true);
    elementShouldBeEnabled('hea_m_050205');

    clickElement('hea_m_050205', true, 'checkbox');
    elementShouldBeEnabled('hea_m_050206');
    elementShouldBeEnabled('hea_m_050207');
    clickElement('hea_m_050206', true, 'radio');
    clickElement('hea_m_050207', true, 'radio');

    // Select Differential diagnosis
    clickElement('hea_m_050501', true);
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-3-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled options
    elementShouldBeEnabled('hea_m_050239');
    elementShouldBeEnabled('hea_m_050243');

    // DD2
    selectDropdownOptionOS('hea_m_050239', 2, true, true);
    elementShouldBeEnabled('hea_m_050240');
    elementShouldBeEnabled('hea_m_050242');

    clickElement('hea_m_050240', true, 'checkbox');

    // DD3
    selectDropdownOptionOS('hea_m_050242', 2, true, true);
    clickElement('hea_m_050243', true, 'checkbox');
  });
});
