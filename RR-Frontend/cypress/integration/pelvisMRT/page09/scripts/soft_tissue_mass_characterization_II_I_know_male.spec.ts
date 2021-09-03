import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080107', 'pel_m_090106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Soft tissue Characterization II - I know - Male', () => {
    // Page 1: select Male and Pelvis
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 3: Contrast enhanced - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Soft tissue
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('pel_m_090107');

    // Select I know
    selectElementByRadioRole(3);

    // Select from DD1*
    // TODO: change ID when the bug is fixed (bug 21991)
    selectDropdownOptionOS('pel_m_0902174', 5, true, true); // cannot be selected cause DD1 and DD2 on CHar II have the same IDs as this

    // Select Char II
    clickElement('pel_m_0902174', true);

    // 2nd column options
    elementShouldBeEnabled('pel_m_0902176');
    elementShouldBeEnabled('pel_m_0902178');
    elementShouldBeEnabled('pel_m_0902179');
    elementShouldBeEnabled('pel_m_0902182');
    elementShouldBeEnabled('pel_m_0902183');
    elementShouldBeEnabled('pel_m_0902184');
    elementShouldBeEnabled('pel_m_0902185');
    elementShouldBeEnabled('pel_m_0902186');
    elementShouldBeEnabled('pel_m_0902187');
    elementShouldBeEnabled('pel_m_0902188');

    // 3rd column options
    elementShouldBeEnabled('pel_m_0903118');
    elementShouldBeEnabled('pel_m_0903119');
    elementShouldBeEnabled('pel_m_0903120');

    // 4th column options
    elementShouldBeEnabled('pel_m_0904130');
    elementShouldBeEnabled('pel_m_0904132');

    // Perifocal reaction options
    clickElement('pel_m_0902176', true, 'checkbox');
    clickElement('pel_m_0902178', true, 'checkbox');
    clickElement('pel_m_0902179', true, 'checkbox');
    clickElement('pel_m_0902182', true, 'checkbox');
    clickElement('pel_m_0902183', true, 'checkbox');
    clickElement('pel_m_0902184', true, 'checkbox');
    clickElement('pel_m_0902185', true, 'checkbox');
    clickElement('pel_m_0902186', true, 'checkbox');
    clickElement('pel_m_0902187', true, 'checkbox');
    clickElement('pel_m_0902188', true, 'checkbox');

    // Select Strong
    clickElement('pel_m_0903118', true, 'radio');
    elementShouldBeEnabled('pel_m_0903121');
    elementShouldBeEnabled('pel_m_0903122');
    elementShouldBeEnabled('pel_m_0903125');

    // Select Homogeneous, Heterogeneous, Marginal
    clickElement('pel_m_0903118', true, 'radio');
    elementShouldBeEnabled('pel_m_0903118');
    clickElement('pel_m_0903122', true, 'radio');
    elementShouldBeEnabled('pel_m_0903122');
    clickElement('pel_m_0903122', true, 'radio');
    elementShouldBeEnabled('pel_m_0903125');

    // Select Low
    clickElement('pel_m_0903119', true, 'radio');
    elementShouldBeEnabled('pel_m_0903121');
    elementShouldBeEnabled('pel_m_0903122');
    elementShouldBeEnabled('pel_m_0903125');

    // Select Homogeneous, Heterogeneous, Marginal
    clickElement('pel_m_0903118', true, 'radio');
    elementShouldBeEnabled('pel_m_0903118');
    clickElement('pel_m_0903122', true, 'radio');
    elementShouldBeEnabled('pel_m_0903122');
    clickElement('pel_m_0903122', true, 'radio');
    elementShouldBeEnabled('pel_m_0903125');

    // Select option from DD2
    selectDropdownOptionOS('pel_m_0902174', 3, true, true);
    elementShouldBeEnabled('pel_m_0904131');

    // Select 'Subordinate'
    clickElement('pel_m_0904131', true, 'checkbox');

    // Select '> 1 lesion, same pathology'
    clickElement('pel_m_0904132', true, 'checkbox');
  });
});
