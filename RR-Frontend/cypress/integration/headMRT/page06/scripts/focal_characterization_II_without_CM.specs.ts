import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, checkInputFieldValue, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Focal Characterization I with DWI', () => {
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

    // Localization selected
    elementShouldBeEnabled('hea_m_060401');

    // Select Char II
    clickElement('hea_m_060401', true);
    cy.get('p-tabview')
      .shadowFind('#ui-tabpanel-2-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled elements
    // Substance defect + checkboxes
    elementShouldBeEnabled('hea_m_060232');
    elementShouldBeEnabled('hea_m_060233');
    elementShouldBeEnabled('hea_m_060234');
    elementShouldBeEnabled('hea_m_060235');
    elementShouldBeEnabled('hea_m_060236');
    elementShouldBeEnabled('hea_m_060237');
    elementShouldBeEnabled('hea_m_060238');
    elementShouldBeEnabled('hea_m_060239');
    elementShouldBeEnabled('hea_m_060240');
    elementShouldBeEnabled('hea_m_060241');

    // Confluent + 2 checkboxes
    elementShouldBeEnabled('hea_m_060243');
    elementShouldBeEnabled('hea_m_060244');
    elementShouldBeEnabled('hea_m_060245');

    // Narrowed sulci + 6 checkboxes
    elementShouldBeEnabled('hea_m_060326');
    elementShouldBeEnabled('hea_m_060327');
    elementShouldBeEnabled('hea_m_060328');
    elementShouldBeEnabled('hea_m_060329');
    elementShouldBeEnabled('hea_m_060330');
    elementShouldBeEnabled('hea_m_060331');
    elementShouldBeEnabled('hea_m_060337');

    // Cortical thinning + checkboxes
    elementShouldBeEnabled('hea_m_060327');
    elementShouldBeEnabled('hea_m_060430');
    elementShouldBeEnabled('hea_m_060431');
    elementShouldBeEnabled('hea_m_060432');
    elementShouldBeEnabled('hea_m_060434');
    elementShouldBeEnabled('hea_m_0604214');

    // Select Midline shift
    clickElement('hea_m_060331', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060333');
    elementShouldBeEnabled('hea_m_060335');

    // Select 'To the right' from Side
    selectDropdownOptionOS('hea_m_060333', 1, true, true);

    // Input field Midline shift (min 1, max 99)
    cy.byRRID('hea_m_060335').type('1');
    checkInputFieldValue('hea_m_060335', 1);
    cy.byRRID('hea_m_060335').clear();

    cy.byRRID('hea_m_060335').type('99');
    checkInputFieldValue('hea_m_060335', 99);

    // Select Herniation
    clickElement('hea_m_060337', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060339');

    // Select 'Subfalcine' from 'Region'
    selectDropdownOptionOS('hea_m_060339', 2, true, true);

    // Select Cortical thinning
    clickElement('hea_m_060427', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060428');
    elementShouldBeEnabled('hea_m_060429');

    // Select Subependymal nodules
    clickElement('hea_m_060432', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060433');

    // Select Abscess
    clickElement('hea_m_060434', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060436');

    // Input field Max. diameter (min 1, max 99)
    cy.byRRID('hea_m_060436').type('1');
    checkInputFieldValue('hea_m_060436', 1);
    cy.byRRID('hea_m_060436').clear();

    cy.byRRID('hea_m_060436').type('99');
    checkInputFieldValue('hea_m_060436', 99);

    // Select Ventricular herniation
    clickElement('hea_m_0604214', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0604215');
    elementShouldBeEnabled('hea_m_0604216');
    elementShouldBeEnabled('hea_m_0604217');
  });
});
