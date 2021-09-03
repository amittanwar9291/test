import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HipMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_040107', 'hip_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Osteitis pubis', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(13);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040241');
    elementShouldBeEnabled('hip_m_040242');
    elementShouldBeEnabled('hip_m_040243');
    elementShouldBeEnabled('hip_m_040244');
    elementShouldBeEnabled('hip_m_040245');

    elementShouldBeEnabled('hip_m_0403118');
    elementShouldBeEnabled('hip_m_0403119');
    elementShouldBeEnabled('hip_m_0403120');
    elementShouldBeEnabled('hip_m_0403121');
    elementShouldBeEnabled('hip_m_0403122');
  });
});
