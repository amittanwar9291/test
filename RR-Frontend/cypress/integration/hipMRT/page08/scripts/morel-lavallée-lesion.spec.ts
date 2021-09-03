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
    it('Soft tissue -> Morel Lavallée Lesion', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');

      elementShouldBeEnabled('hip_m_080310');
      elementShouldBeEnabled('hip_m_080311');
      elementShouldBeEnabled('hip_m_080312');
      elementShouldBeEnabled('hip_m_080313');
      elementShouldBeEnabled('hip_m_080317');

      elementShouldBeEnabled('hip_m_080405');
      elementShouldBeEnabled('hip_m_080406');
      elementShouldBeEnabled('hip_m_080407');
      elementShouldBeEnabled('hip_m_080408');
      elementShouldBeEnabled('hip_m_080409');
      elementShouldBeEnabled('hip_m_080410');
      elementShouldBeEnabled('hip_m_080502');

      cy.byRRID('hip_m_080317').type('23');
      elementShouldBeEnabled('hip_m_080320');

      cy.byRRID('hip_m_080320').type('28');
      elementShouldBeEnabled('hip_m_080323');

      selectFindingsDropdownOption('hip_m_080502', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('hip_m_080503');
    });
  });
});
