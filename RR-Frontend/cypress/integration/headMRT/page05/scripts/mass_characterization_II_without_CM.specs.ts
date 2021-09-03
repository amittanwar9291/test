import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

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

  it('Mass Characterization II with CM', () => {
    // Go to Page 05
    NavigationPageObject.visitPageNumber(5);

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

    // Select Characterization II
    clickElement('hea_m_050401', true);
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-2-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled options column 2
    elementShouldBeEnabled('hea_m_0502201');
    elementShouldBeEnabled('hea_m_0502204');
    elementShouldBeEnabled('hea_m_0502207');
    elementShouldBeEnabled('hea_m_0502208');
    elementShouldBeEnabled('hea_m_0502209');
    elementShouldBeEnabled('hea_m_0502210');
    elementShouldBeEnabled('hea_m_0502211');
    elementShouldBeEnabled('hea_m_0502212');

    // Enabled options column 3
    elementShouldBeEnabled('hea_m_0503201');
    elementShouldBeEnabled('hea_m_0503202');
    elementShouldBeEnabled('hea_m_0503203');
    elementShouldBeEnabled('hea_m_0503204');
    elementShouldBeEnabled('hea_m_0503206');
    elementShouldBeEnabled('hea_m_0503207');
    elementShouldBeEnabled('hea_m_0503208');
    elementShouldBeEnabled('hea_m_0503209');
    elementShouldBeEnabled('hea_m_0503210');

    // Select options column 2
    clickElement('hea_m_0502201', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0502202');
    elementShouldBeEnabled('hea_m_0502203');

    clickElement('hea_m_0502202', true, 'radio');
    clickElement('hea_m_0502203', true, 'radio');

    clickElement('hea_m_0502204', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0502205');
    elementShouldBeEnabled('hea_m_0502206');

    clickElement('hea_m_0502205', true, 'radio');
    clickElement('hea_m_0502206', true, 'radio');

    clickElement('hea_m_0502207', true, 'checkbox');
    clickElement('hea_m_0502208', true, 'checkbox');
    clickElement('hea_m_0502209', true, 'checkbox');
    clickElement('hea_m_0502210', true, 'checkbox');
    clickElement('hea_m_0502211', true, 'checkbox');
    clickElement('hea_m_0502212', true, 'checkbox');

    // Select options column 3
    clickElement('hea_m_0503201', true, 'radio');
    clickElement('hea_m_0503202', true, 'radio');
    clickElement('hea_m_0503203', true, 'checkbox');
    clickElement('hea_m_0503204', true, 'checkbox');

    clickElement('hea_m_0503206', true, 'checkbox');
    clickElement('hea_m_0503207', true, 'checkbox');
    clickElement('hea_m_0503208', true, 'checkbox');
    clickElement('hea_m_0503209', true, 'checkbox');
    clickElement('hea_m_0503210', true, 'checkbox');
  });
});
