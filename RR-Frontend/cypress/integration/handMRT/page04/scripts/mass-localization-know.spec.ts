import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_040107', 'han_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Localization know', () => {
    clickElement('han_m_040105');
    findingColumn.selectFindingOptionByAppearance(9);
    selectElementByRadioRole(3);

    elementShouldBeEnabled('han_m_0402111');
    elementShouldBeEnabled('han_m_0402103');

    elementShouldBeEnabled('han_m_0403174');
    elementShouldBeEnabled('han_m_0403175');
    elementShouldBeEnabled('han_m_0403176');

    elementShouldBeEnabled('han_m_0404146');

    elementShouldBeEnabled('uni_04_003');
    elementShouldBeEnabled('uni_04_005');
    elementShouldBeEnabled('uni_04_007');

    selectDropdownOptionOS('han_m_0402111', 5, true, true);
    elementShouldBeEnabled('han_m_0402112');

    clickElement('han_m_0402112', true, 'checkbox');
    elementShouldBeEnabled('han_m_0402113');
    elementShouldBeEnabled('han_m_0402114');

    cy.byRRID('han_m_0404147').type('12');
    cy.byRRID('han_m_0404150').type('34');
    elementShouldBeEnabled('han_m_0404153');
  });
});
