import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 06 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Focal Characterization I without DWI', () => {
    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Select Sequences - Individual
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    elementShouldBeEnabled('uni_x_030210-1');

    // Select DWI
    selectDropdownOptionOS('uni_x_030210-1', 2, true, true);

    // Go to Page 06
    NavigationPageObject.visitPageNumber(6);

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

    // Localization selected
    elementShouldBeEnabled('hea_m_060202');
    cy.get('p-tabview')
      .shadowFind('li:nth-child(1)')
      .should('have.class', 'ui-state-active');

    // Select Char I
    clickElement('hea_m_060301', true);
    cy.get('p-tabview')
      .shadowFind('#ui-tabpanel-1-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Circumscribed, Non-circumscribed
    elementShouldBeEnabled('hea_m_060261');
    elementShouldBeEnabled('hea_m_060262');

    // Homogeneous, Heterogeneous
    elementShouldBeEnabled('hea_m_060264');
    elementShouldBeEnabled('hea_m_060265');

    // Round, Oval, Patchy, Areal
    elementShouldBeEnabled('hea_m_060267');
    elementShouldBeEnabled('hea_m_060268');
    elementShouldBeEnabled('hea_m_060269');
    elementShouldBeEnabled('hea_m_0602670'); // TODO - wrong ID at Areal - bug 22686 should be changed to hea_m_060270

    // T1w signal, T2w signal, FLAIR signal
    elementShouldBeEnabled('hea_m_060359');
    elementShouldBeEnabled('hea_m_060361');
    elementShouldBeEnabled('hea_m_060363');

    // Signal void, Diffusion restriction
    elementShouldBeEnabled('hea_m_060453');
    elementShouldBeEnabled('hea_m_060461');

    // Cysts, Calcification, Necrosis, Signal voids, Hemorrhage
    elementShouldBeEnabled('hea_m_060547');
    elementShouldBeEnabled('hea_m_060548');
    elementShouldBeEnabled('hea_m_060549');
    elementShouldBeEnabled('hea_m_060550');
    elementShouldBeEnabled('hea_m_060551');

    // Confluent, Mass effect, Infiltration
    elementShouldBeEnabled('hea_m_060555');
    elementShouldBeEnabled('hea_m_060556');
    elementShouldBeEnabled('hea_m_060557');

    // Select Signal void
    clickElement('hea_m_060453', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060454');
    elementShouldBeEnabled('hea_m_060455');

    // Calcification, blood
    clickElement('hea_m_060454', true, 'radio');
    clickElement('hea_m_060455', true, 'radio');

    // Select Hemorrhage
    clickElement('hea_m_060551', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060552');
    elementShouldBeEnabled('hea_m_060553');

    // T1w signal
    selectSliderValueAndCheckIt('hea_m_060359', 0, 5);

    // T2w signal
    selectSliderValueAndCheckIt('hea_m_060361', 0, 5);

    // FLAIR signal
    selectSliderValueAndCheckIt('hea_m_060363', 0, 5);

    // Diffusion imaging
    clickElement('hea_m_060461', true, 'checkbox');
  });
});
