import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeChecked,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 11 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_110107', 'hea_m_110106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_FacialSkull.url + '/' + pageId);
        });
      });
    });
  });

  it('Base of Skull Localization describe', () => {
    // On page 11 select "Temporal bone" from dropdown
    clickElement('hea_m_110105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);

    // Check I know button and choose any value of DD dropdown
    selectElementByRadioRole(4);
    selectDropdownOptionOS('hea_m_110240', 2, true, true);

    // Go to DD tab
    clickElement('hea_m_110533');
    elementShouldBeDisabled('hea_m_110266');
    elementShouldBeEnabled('hea_m_110269');
    elementShouldBeEnabled('hea_m_110273');

    // Select any diagnosis from second dropdown
    selectDropdownOptionOS('hea_m_110269', 2, true, true);
    elementShouldBeEnabled('hea_m_110270');
    elementShouldBeEnabled('hea_m_110272');

    clickElement('hea_m_110270', true, 'checkbox');
    elementShouldBeChecked('hea_m_110270');
    clickElement('hea_m_110273', true, 'checkbox');
    elementShouldBeChecked('hea_m_110273');
  });
});
