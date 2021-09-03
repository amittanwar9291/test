import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('ShoulderMRT - Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('sho_m_040107', 'sho_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Bone marrow edema – Characterization II', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(1);
    cy.get('#ui-tabpanel-1-label').click();
    const enabledElements = ['sho_m_0402210', 'sho_m_0402211', 'sho_m_0402212', 'uni_04_003', 'uni_04_005', 'uni_04_007'];
    elementShouldBeEnabled(enabledElements);
  });
});
