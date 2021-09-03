import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeChecked,
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
    // On page 11 select "Base of Skull" from finding dropdown
    clickElement('hea_m_110105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    selectElementByRadioRole(3);

    // Go to DD tab
    clickElement('hea_m_110501');
    elementShouldBeEnabled('hea_m_110230');
    elementShouldBeEnabled('hea_m_110237');

    // Select any diagnosis from dropdown
    selectDropdownOptionOS('hea_m_110230', 2, true, true);
    elementShouldBeEnabled('hea_m_110231');
    elementShouldBeEnabled('hea_m_110233');

    // Select elements and check them
    clickElement('hea_m_110231', true, 'checkbox');
    elementShouldBeChecked('hea_m_110231');

    // Select from dropdown
    selectDropdownOptionOS('hea_m_110233', 3, true, true);
    elementShouldBeEnabled('hea_m_110234');
    elementShouldBeEnabled('hea_m_110236');

    // Select elements and check them
    clickElement('hea_m_110234', true, 'checkbox');
    elementShouldBeChecked('hea_m_110234');
    clickElement('hea_m_110237', true, 'checkbox');
    elementShouldBeChecked('hea_m_110237');
  });
});
