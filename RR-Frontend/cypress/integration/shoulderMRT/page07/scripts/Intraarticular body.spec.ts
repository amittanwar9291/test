import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Shoulder Page 07 - Join and Bursae', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_070107', 'sho_m_070106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_JointAndBursae.url + '/' + pageId);
        });
      });
    });
  });

  describe('Intraarticular body', () => {
    it('Intraarticular body', () => {
      clickElement('sho_m_070105', true, 'radio');

      elementShouldBeEnabled('sho_m_070106-1');

      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('sho_m_070107');
      elementShouldBeEnabled('sho_m_070226');
      elementShouldBeEnabled('uni_07_003');
      elementShouldBeEnabled('uni_07_005');
      elementShouldBeEnabled('uni_07_006');
    });
  });
});
