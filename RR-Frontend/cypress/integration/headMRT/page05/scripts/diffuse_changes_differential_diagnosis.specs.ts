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

  it('Diffuse changes Localization', () => {
    // Select Finding and Diffuse changes
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    selectDropdownOptionOS('hea_m_050106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_050107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Differential diagnose tab
    clickElement('hea_m_050440', true);
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-2-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled options
    elementShouldBeEnabled('hea_m_050267');

    // Select value from DD1*
    // TODO - bugfix 22361 - wrong ID hea_m_050270
    selectDropdownOptionOS('hea_m_050267', 2, true, true);
    elementShouldBeEnabled('hea_m_050268');
    elementShouldBeEnabled('hea_m_050270'); // current ID hea_m_050239

    // Select Suspicion of
    clickElement('hea_m_050268', true, 'checkbox');

    // Select value from DD2
    selectDropdownOptionOS('hea_m_050270', 3, true, true); // current ID hea_m_050239
  });
});
