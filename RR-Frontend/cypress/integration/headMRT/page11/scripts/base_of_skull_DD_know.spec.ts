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

  it('Base of Skull describe', () => {
    // On page 11 select "Base of Skull" from dropdown
    clickElement('hea_m_110105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    selectElementByRadioRole(4);
    selectDropdownOptionOS('hea_m_110204', 2, true, true);

    // On DD tab
    clickElement('hea_m_110501');
    elementShouldBeDisabled('hea_m_110230');
    elementShouldBeEnabled('hea_m_110233');
    elementShouldBeEnabled('hea_m_110237');

    // Select from dropdown menues
    selectDropdownOptionOS('hea_m_110233', 2, true, true);
    elementShouldBeEnabled('hea_m_110234');
    elementShouldBeEnabled('hea_m_110236');

    // Select elements and check them
    clickElement('hea_m_110234', true, 'checkbox');
    elementShouldBeChecked('hea_m_110234');
    clickElement('hea_m_110237', true, 'checkbox');
    elementShouldBeChecked('hea_m_110237');
  });
});
