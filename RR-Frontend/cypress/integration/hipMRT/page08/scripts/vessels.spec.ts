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
    it('Soft tissue -> Vessels', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');

      elementShouldBeEnabled('hip_m_080325');
      elementShouldBeEnabled('hip_m_080326');

      clickElement('hip_m_080325', true, 'radio');
      elementShouldBeEnabled('hip_m_080412');
      elementShouldBeEnabled('hip_m_080413');
      elementShouldBeEnabled('hip_m_080414');
      elementShouldBeEnabled('hip_m_080415');
      elementShouldBeEnabled('hip_m_080418');
      elementShouldBeEnabled('hip_m_080421');

      clickElement('hip_m_080326', true, 'radio');
      elementShouldBeEnabled('hip_m_080422');
      elementShouldBeEnabled('hip_m_080423');
      elementShouldBeEnabled('hip_m_080424');
    });
  });
});
