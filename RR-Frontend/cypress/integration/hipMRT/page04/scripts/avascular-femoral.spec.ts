import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Avascular femoral head necrosis', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040211');
    elementShouldBeEnabled('hip_m_040212');
    elementShouldBeEnabled('hip_m_040214');

    elementShouldBeEnabled('hip_m_040378');
    elementShouldBeEnabled('hip_m_040381');

    elementShouldBeEnabled('hip_m_040383');
    elementShouldBeEnabled('hip_m_040384');

    elementShouldBeEnabled('hip_m_0404121');
    elementShouldBeEnabled('hip_m_040456');
    elementShouldBeEnabled('hip_m_040457');
    elementShouldBeEnabled('hip_m_040459');
    elementShouldBeEnabled('hip_m_040460');
    elementShouldBeEnabled('hip_m_040461');
    elementShouldBeEnabled('hip_m_040462');
    elementShouldBeEnabled('hip_m_040463');

    elementShouldBeEnabled('hip_m_040596');

    clickElement('hip_m_040214');
    elementShouldBeEnabled('hip_m_040216');
    elementShouldBeEnabled('hip_m_040217');
    elementShouldBeEnabled('hip_m_040218');
    elementShouldBeEnabled('hip_m_040219');

    selectDropdownOptionOS('hip_m_040596', 3, true, true);
    elementShouldBeEnabled('hip_m_040597');
  });
});
