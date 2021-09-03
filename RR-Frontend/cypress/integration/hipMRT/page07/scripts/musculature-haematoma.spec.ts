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
    it('Musculature -> Haematoma', () => {
      clickElement('hip_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      clickElement('hip_m_070303', true, 'radio');
      elementShouldBeEnabled('hip_m_070407');
      elementShouldBeEnabled('hip_m_070408');
      elementShouldBeEnabled('hip_m_070411');
      elementShouldBeEnabled('hip_m_070414');

      elementShouldBeEnabled('hip_m_070515');
      elementShouldBeEnabled('hip_m_070516');
      elementShouldBeEnabled('hip_m_070517');
      elementShouldBeEnabled('hip_m_070518');
    });
  });
});
