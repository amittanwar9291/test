import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS
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

  it('Pathology Localization - I describe', () => {
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

    // Click on Localizer and select 2 parts
    clickElement('hea_m_070330', true);

    // todo Localizer ID is missing so this part needs to be re-done (Bug 22337)
  });
});
