import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Muscles and Tendons', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_070107', 'hip_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_MusclesAndTendons.url + '/' + pageId);
        });
      });
    });
  });

  describe('Muscle, Tendons', () => {
    it('Musculature -> Further findings', () => {
      clickElement('hip_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      clickElement('hip_m_070304', true, 'radio');
      elementShouldBeEnabled('hip_m_070416');
      elementShouldBeEnabled('hip_m_070419');
      elementShouldBeEnabled('hip_m_070420');

      elementShouldBeEnabled('hip_m_070519');
      elementShouldBeEnabled('hip_m_070520');
      elementShouldBeEnabled('hip_m_070522');

      clickElement('hip_m_070416', true, 'checkbox');
      elementShouldBeEnabled('hip_m_070417');
      elementShouldBeEnabled('hip_m_070418');

      clickElement('hip_m_070420', true, 'checkbox');
      elementShouldBeEnabled('hip_m_070422');

      clickElement('hip_m_070520', true, 'checkbox');
      elementShouldBeEnabled('hip_m_070521');

      clickElement('hip_m_070522', true, 'checkbox');
      elementShouldBeEnabled('hip_m_070525');
    });
  });
});
