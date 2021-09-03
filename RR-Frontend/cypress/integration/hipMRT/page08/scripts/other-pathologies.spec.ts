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
    it('Soft tissue -> Other Pathologies', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(6);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');

      elementShouldBeEnabled('hip_m_080359');
      elementShouldBeEnabled('hip_m_080360');
      elementShouldBeEnabled('hip_m_080361');

      clickElement('hip_m_080360', true, 'radio');
      elementShouldBeEnabled('hip_m_080459');
      elementShouldBeEnabled('hip_m_080533');

      clickElement('hip_m_080459', true, 'checkbox');
      elementShouldBeEnabled('hip_m_080462');
      elementShouldBeEnabled('hip_m_080464');

      clickElement('hip_m_080533', true, 'checkbox');
      elementShouldBeEnabled('hip_m_080536');
      elementShouldBeEnabled('hip_m_080538');
    });
  });
});
