import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig, elementShouldBeDisabled } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_060106', 'hip_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_CapsuleAndLigaments.url + '/' + pageId);
        });
      });
    });
  });

  it('Synovia, diffuse pathology- Without CM', () => {
    clickElement('hip_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('hip_m_060107');
    elementShouldBeEnabled('hip_m_060207');

    elementShouldBeEnabled('hip_m_060208');
    elementShouldBeEnabled('hip_m_060210');
    elementShouldBeDisabled('hip_m_060211');
  });
});
