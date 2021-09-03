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

context('Page 10 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_100107', 'hea_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_SellarRegion.url + '/' + pageId);
        });
      });
    });
  });

  it('Pathology DD I know', () => {
    clickElement('hea_m_100105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    selectElementByRadioRole(4);
    selectDropdownOptionOS('hea_m_100204', 2, true, true);

    clickElement('hea_m_100501');

    elementShouldBeDisabled('hea_m_100233');
    elementShouldBeEnabled('hea_m_100236');
    elementShouldBeEnabled('hea_m_100240');

    selectDropdownOptionOS('hea_m_100236', 3, true, true);
    elementShouldBeEnabled('hea_m_100237');
    elementShouldBeEnabled('hea_m_100239');

    clickElement('hea_m_100237', true, 'checkbox');
    elementShouldBeChecked('hea_m_100237');

    clickElement('hea_m_100240', true, 'checkbox');
    elementShouldBeChecked('hea_m_100240');
  });
});
