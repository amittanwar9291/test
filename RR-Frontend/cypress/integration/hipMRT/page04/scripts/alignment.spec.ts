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

  it('Alignment', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040202');
    elementShouldBeEnabled('hip_m_040203');

    clickElement('hip_m_040203');
    elementShouldBeEnabled('hip_m_040302');
    elementShouldBeEnabled('hip_m_040303');
    elementShouldBeEnabled('hip_m_040305');
    elementShouldBeEnabled('hip_m_040306');
    elementShouldBeEnabled('hip_m_040307');

    elementShouldBeEnabled('hip_m_040402');
    elementShouldBeEnabled('hip_m_040502');

    clickElement('hip_m_040402');
    elementShouldBeEnabled('hip_m_040404');
    elementShouldBeEnabled('hip_m_040406');
    elementShouldBeEnabled('hip_m_040407');

    clickElement('hip_m_040502');
    elementShouldBeEnabled('hip_m_040503');
    elementShouldBeEnabled('hip_m_040504');
    elementShouldBeEnabled('hip_m_040505');
    elementShouldBeEnabled('hip_m_040506');
    elementShouldBeEnabled('hip_m_040507');
  });
});
