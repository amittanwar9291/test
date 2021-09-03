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
    it('Bursitis ', () => {
      clickElement('hip_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('hip_m_070107');
      elementShouldBeEnabled('hip_m_070203');
      elementShouldBeEnabled('hip_m_070204');

      elementShouldBeEnabled('hip_m_070220');
      elementShouldBeEnabled('hip_m_070221');
      elementShouldBeEnabled('hip_m_070222');
      elementShouldBeEnabled('hip_m_070223');
      elementShouldBeEnabled('hip_m_070224');
      elementShouldBeEnabled('hip_m_070225');
      elementShouldBeEnabled('hip_m_070226');

      elementShouldBeEnabled('hip_m_070308');
      elementShouldBeEnabled('hip_m_070309');
      elementShouldBeEnabled('hip_m_070312');
      elementShouldBeEnabled('hip_m_070314');
      elementShouldBeEnabled('hip_m_070315');

      elementShouldBeEnabled('hip_m_070443');
      elementShouldBeEnabled('hip_m_070444');
      elementShouldBeEnabled('hip_m_070445');
      elementShouldBeEnabled('hip_m_070446');
      elementShouldBeEnabled('hip_m_070447');
    });
  });
});
