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

    // Enabled options Localization 2nd column
    elementShouldBeEnabled('hea_m_050246');
    elementShouldBeEnabled('hea_m_050247');
    elementShouldBeEnabled('hea_m_050248');

    elementShouldBeEnabled('hea_m_050250');
    elementShouldBeEnabled('hea_m_050251');
    elementShouldBeEnabled('hea_m_050252');
    elementShouldBeEnabled('hea_m_050253');
    elementShouldBeEnabled('hea_m_050254');

    // Enabled options Localization 3rd column
    elementShouldBeEnabled('hea_m_050328');
    elementShouldBeEnabled('hea_m_050329');
    elementShouldBeEnabled('hea_m_050330');
    elementShouldBeEnabled('hea_m_050331');
    elementShouldBeEnabled('hea_m_050332');
    elementShouldBeEnabled('hea_m_050333');
    elementShouldBeEnabled('hea_m_050334');
    elementShouldBeEnabled('hea_m_050335');
    elementShouldBeEnabled('hea_m_050336');
    elementShouldBeEnabled('hea_m_050337');
    elementShouldBeEnabled('hea_m_050338');
    elementShouldBeEnabled('hea_m_050339');

    // Select options 2nd column
    clickElement('hea_m_050246', true, 'checkbox');
    clickElement('hea_m_050247', true, 'checkbox');
    clickElement('hea_m_050248', true, 'checkbox');

    clickElement('hea_m_050250', true, 'checkbox');
    clickElement('hea_m_050251', true, 'checkbox');
    clickElement('hea_m_050252', true, 'checkbox');
    clickElement('hea_m_050253', true, 'checkbox');
    clickElement('hea_m_050254', true, 'checkbox');

    // Select options 3rd column
    clickElement('hea_m_050328', true, 'checkbox');
    clickElement('hea_m_050329', true, 'checkbox');
    clickElement('hea_m_050330', true, 'checkbox');
    clickElement('hea_m_050331', true, 'checkbox');
    clickElement('hea_m_050332', true, 'checkbox');
    clickElement('hea_m_050333', true, 'checkbox');
    clickElement('hea_m_050334', true, 'checkbox');
    clickElement('hea_m_050335', true, 'checkbox');
    clickElement('hea_m_050336', true, 'checkbox');
    clickElement('hea_m_050337', true, 'checkbox');
    clickElement('hea_m_050338', true, 'checkbox');
    clickElement('hea_m_050339', true, 'checkbox');
  });
});
