import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BrainstemCranialNerves.url + '/' + pageId);
        });
      });
    });
  });

  it('Brainstem Differential diagnosis - I know', () => {
    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Brainstem from the dropdown menu
    clickElement('hea_m_080106', true, 'radio');
    elementShouldBeEnabled('hea_m_080107-1');
    selectDropdownOptionOS('hea_m_080107-1', 0, true, true);
    elementShouldBeEnabled('hea_m_080108');
    /* elementShouldBeEnabled('hea_m_080112');
    elementShouldBeEnabled('hea_m_080113'); */

    // Click I know radio button
    // clickElement('hea_m_080113', true, 'radio');
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

    // Select a diagnosis from Differential diagnosis 1
    selectDropdownOptionOS('hea_m_080256', '2', true, true);

    // Click on Differential diagnosis tab
    cy.byRRID('hea_m_080501').click();

    elementShouldBeEnabled('hea_m_080237');
    elementShouldBeEnabled('hea_m_080241');

    selectDropdownOptionOS('hea_m_080237', 2, true, true);
    elementShouldBeEnabled('hea_m_080238');
    elementShouldBeEnabled('hea_m_080240');

    clickElement('hea_m_080238', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080238');

    selectDropdownOptionOS('hea_m_080240', 1, true, true);

    clickElement('hea_m_080241', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080241');
  });
});
