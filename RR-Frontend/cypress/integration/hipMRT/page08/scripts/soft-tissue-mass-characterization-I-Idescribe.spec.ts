import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
    it('Soft tissue -> Soft Tissue Mass -> Characterization -> I describe', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080213');
      elementShouldBeEnabled('hip_m_080345');
      elementShouldBeEnabled('hip_m_080441');

      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');
      elementShouldBeEnabled('hip_m_080347');
      elementShouldBeEnabled('hip_m_080348');
      elementShouldBeEnabled('hip_m_080349');
      elementShouldBeEnabled('hip_m_080350');

      elementShouldBeEnabled('hip_m_080445');
      elementShouldBeEnabled('hip_m_080516');
      elementShouldBeEnabled('hip_m_080517');
      elementShouldBeEnabled('hip_m_080519');
      elementShouldBeEnabled('hip_m_080520');

      cy.byRRID('hip_m_080445').type('43');
      elementShouldBeEnabled('hip_m_080448');

      cy.byRRID('hip_m_080448').type('45');
      elementShouldBeEnabled('hip_m_080451');
    });
  });
});
