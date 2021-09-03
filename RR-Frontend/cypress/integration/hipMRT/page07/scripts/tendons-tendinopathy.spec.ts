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
    it('Tendons -> Tendinopathy', () => {
      clickElement('hip_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('hip_m_070107');
      elementShouldBeEnabled('hip_m_070203');
      elementShouldBeEnabled('hip_m_070204');

      elementShouldBeEnabled('hip_m_070215');
      elementShouldBeEnabled('hip_m_070216');
      elementShouldBeEnabled('hip_m_070217');
      elementShouldBeEnabled('hip_m_070218');
      elementShouldBeEnabled('hip_m_070219');

      elementShouldBeEnabled('hip_m_070305');
      elementShouldBeEnabled('hip_m_070306');

      clickElement('hip_m_070306', true, 'radio');
      elementShouldBeEnabled('hip_m_070436');
      elementShouldBeEnabled('hip_m_070435');
      elementShouldBeEnabled('hip_m_070437');
      elementShouldBeEnabled('hip_m_070439');
      elementShouldBeEnabled('hip_m_070440');
      elementShouldBeEnabled('hip_m_070441');
    });
  });
});
