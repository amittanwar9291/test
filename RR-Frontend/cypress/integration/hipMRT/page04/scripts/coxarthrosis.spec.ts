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

  it('Coxarthrosis', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(11);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040211');
    elementShouldBeEnabled('hip_m_040212');
    elementShouldBeEnabled('hip_m_040224');
    elementShouldBeEnabled('hip_m_040225');
    elementShouldBeEnabled('hip_m_040227');

    elementShouldBeEnabled('hip_m_040386');
    elementShouldBeEnabled('hip_m_040387');
    elementShouldBeEnabled('hip_m_040388');
    elementShouldBeEnabled('hip_m_040389');
    elementShouldBeEnabled('hip_m_040390');
    elementShouldBeEnabled('hip_m_040391');
    elementShouldBeEnabled('hip_m_040392');
    elementShouldBeEnabled('hip_m_040396');
    elementShouldBeEnabled('hip_m_040397');

    elementShouldBeEnabled('hip_m_040465');
    elementShouldBeEnabled('hip_m_040466');

    elementShouldBeEnabled('hip_m_0405100');
    elementShouldBeEnabled('hip_m_0405101');
    elementShouldBeEnabled('hip_m_0405102');
    elementShouldBeEnabled('hip_m_0405104');
    elementShouldBeEnabled('hip_m_0405105');
    elementShouldBeEnabled('hip_m_0405106');
    elementShouldBeEnabled('hip_m_0405107');

    clickElement('hip_m_040227');
    elementShouldBeEnabled('hip_m_040229');
    elementShouldBeEnabled('hip_m_040230');
    elementShouldBeEnabled('hip_m_040232');
    elementShouldBeEnabled('hip_m_040233');

    clickElement('hip_m_040392');
    elementShouldBeEnabled('hip_m_040395');

    clickElement('hip_m_040397');
    elementShouldBeEnabled('hip_m_0403100');

    clickElement('hip_m_040466');
    elementShouldBeEnabled('hip_m_040467');
    elementShouldBeEnabled('hip_m_040470');
  });
});
