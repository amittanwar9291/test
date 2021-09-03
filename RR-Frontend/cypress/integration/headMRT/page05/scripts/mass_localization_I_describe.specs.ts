import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { checkMandatoryGroup, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Mass Localization I describe', () => {
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
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();
    elementShouldBeEnabled('hea_m_050204');

    // Enabled options column 2
    elementShouldBeEnabled('hea_m_050209');
    elementShouldBeEnabled('hea_m_050210');
    elementShouldBeEnabled('hea_m_050211');

    // Enabled options column 3
    elementShouldBeEnabled('hea_m_050303');
    elementShouldBeEnabled('hea_m_050304');
    elementShouldBeEnabled('hea_m_050305');
    elementShouldBeEnabled('hea_m_050306');
    elementShouldBeEnabled('hea_m_050307');

    // Enabled options column 4
    elementShouldBeEnabled('hea_m_050403');
    elementShouldBeEnabled('hea_m_050404');
    elementShouldBeEnabled('hea_m_050405');
    elementShouldBeEnabled('hea_m_050406');
    elementShouldBeEnabled('hea_m_050407');
    elementShouldBeEnabled('hea_m_050408');
    elementShouldBeEnabled('hea_m_050409');
    elementShouldBeEnabled('hea_m_050410');
    elementShouldBeEnabled('hea_m_050411');
    elementShouldBeEnabled('hea_m_050412');
    elementShouldBeEnabled('hea_m_050413');
    elementShouldBeEnabled('hea_m_050414');

    // Select elements column 2
    selectDropdownOptionOS('hea_m_050204', 5, true, true);
    elementShouldBeEnabled('hea_m_050205');

    clickElement('hea_m_050205', true, 'checkbox');
    elementShouldBeEnabled('hea_m_050206');
    elementShouldBeEnabled('hea_m_050207');

    clickElement('hea_m_050206', true, 'radio');
    clickElement('hea_m_050207', true, 'radio');

    clickElement('hea_m_050209', true, 'checkbox');
    clickElement('hea_m_050210', true, 'checkbox');
    clickElement('hea_m_050211', true, 'checkbox');

    checkMandatoryGroup(['hea_m_050209', 'hea_m_050210', 'hea_m_050211']);

    // Select elements column 3
    clickElement('hea_m_050303', true, 'checkbox');
    clickElement('hea_m_050304', true, 'checkbox');
    clickElement('hea_m_050305', true, 'checkbox');
    clickElement('hea_m_050306', true, 'checkbox');
    clickElement('hea_m_050307', true, 'checkbox');

    // Select elements column 4
    clickElement('hea_m_050403', true, 'checkbox');
    clickElement('hea_m_050404', true, 'checkbox');
    clickElement('hea_m_050405', true, 'checkbox');
    clickElement('hea_m_050406', true, 'checkbox');
    clickElement('hea_m_050407', true, 'checkbox');
    clickElement('hea_m_050408', true, 'checkbox');
    clickElement('hea_m_050409', true, 'checkbox');
    clickElement('hea_m_050410', true, 'checkbox');
    clickElement('hea_m_050411', true, 'checkbox');
    clickElement('hea_m_050412', true, 'checkbox');
    clickElement('hea_m_050413', true, 'checkbox');
    clickElement('hea_m_050414', true, 'checkbox');
  });
});
