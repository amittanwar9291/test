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

context('Page 07 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_070107', 'hea_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BasalNuclei.url + '/' + pageId);
        });
      });
    });
  });

  it('Pathology Differential diagnosis - I describe', () => {
    // Page 7
    NavigationPageObject.visitPageNumber(7);

    // Select Pathology from the dropdown menu
    clickElement('hea_m_070105', true, 'radio');
    elementShouldBeEnabled('hea_m_070106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_070107');
    /* elementShouldBeEnabled('hea_m_070111');
    elementShouldBeEnabled('hea_m_070112'); */

    // Click I know radio button
    // clickElement('hea_m_070112', true, 'radio');
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

    // Select a diagnosis from DD1 in Localization tab
    selectDropdownOptionOS('hea_m_070204', 2, true, true);
    elementShouldBeEnabled('hea_m_070243');
    cy.wait(600);
    clickElement('hea_m_070243', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070243');
    elementShouldBeEnabled('hea_m_070244');
    elementShouldBeEnabled('hea_m_070245');
    clickElement('hea_m_070244', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070244');
    clickElement('hea_m_070245', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070245');

    // Click on Differential diagnosis tab
    cy.byRRID('hea_m_070501').click();
    elementShouldBeEnabled('hea_m_070238');
    elementShouldBeEnabled('hea_m_070242');

    // Select diagnosis from DD2  // TODO Wrong ID for DD2 in FE (Bug 22809)
    selectDropdownOptionOS('hea_m_070238', 2, true, true);
    elementShouldBeEnabled('hea_m_070239');
    elementShouldBeEnabled('hea_m_070241');

    clickElement('hea_m_070239', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070239');

    selectDropdownOptionOS('hea_m_070241', 1, true, true);

    clickElement('hea_m_070242', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070242');
  });
});
