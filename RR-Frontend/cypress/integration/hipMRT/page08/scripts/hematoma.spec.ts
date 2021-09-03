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
    it('Soft tissue -> Hematoma', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');
      elementShouldBeEnabled('hip_m_080206');
      elementShouldBeEnabled('hip_m_080207');

      elementShouldBeEnabled('hip_m_080330');
      elementShouldBeEnabled('hip_m_080427');
      elementShouldBeEnabled('hip_m_080430');

      elementShouldBeEnabled('hip_m_080505');
      elementShouldBeEnabled('hip_m_080506');
      elementShouldBeEnabled('hip_m_080507');
      elementShouldBeEnabled('hip_m_080508');
      elementShouldBeEnabled('hip_m_080510');

      clickElement('hip_m_080207', true, 'checkbox');
      elementShouldBeEnabled('hip_m_080209');
      elementShouldBeEnabled('hip_m_080210');
      elementShouldBeEnabled('hip_m_080211');
      elementShouldBeEnabled('hip_m_080212');

      cy.byRRID('hip_m_080330').type('23');
      elementShouldBeEnabled('hip_m_080333');

      cy.byRRID('hip_m_080333').type('25');
      elementShouldBeEnabled('hip_m_080336');

      selectFindingsDropdownOption('hip_m_080510', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('hip_m_080511');
    });
  });
});
