import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt,
  elementShouldBeDisabled
} from '../../../../shared/service';
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

  it('Diffuse Characterization I without DWI', () => {
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
    cy.get('rr-diffuse')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Char I
    clickElement('hea_m_060301', true);
    cy.get('p-tabview')
      .shadowFind('li:nth-child(2)')
      .should('have.class', 'ui-state-active');

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

    // Signal void
    elementShouldBeEnabled('hea_m_060453');
    elementShouldBeDisabled('hea_m_060461');

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
  });
});
