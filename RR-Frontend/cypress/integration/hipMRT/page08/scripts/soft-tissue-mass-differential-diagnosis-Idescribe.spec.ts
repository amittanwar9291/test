import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_080107', 'hip_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Soft Tissue Mass -> Differential diagnosis -> I describe', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      cy.byRRID('hip_m_080441').click();
      elementShouldBeEnabled('hip_m_080229');
      elementShouldBeEnabled('hip_m_080357');

      selectFindingsDropdownOption('hip_m_080229', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('hip_m_080230');
      elementShouldBeEnabled('hip_m_080231');

      selectFindingsDropdownOption('hip_m_080232', '.ui-dropdown-label', 3, true, true);
      elementShouldBeEnabled('hip_m_080233');
      elementShouldBeEnabled('hip_m_080235');
    });
  });
});
