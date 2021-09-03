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

  it('Glenohumeral osteoarthritis', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(4);
    const enabledElements1 = [
      'sho_m_040107',
      'sho_m_040222',
      'sho_m_040319',
      'sho_m_040320',
      'sho_m_040321',
      'sho_m_040322',
      'sho_m_040324',
      'sho_m_040325'
    ];
    elementShouldBeEnabled(enabledElements1);

    clickElement('sho_m_040222');
    const enabledElements2 = ['sho_m_040223', 'sho_m_040224'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('sho_m_040322');
    const enabledElements3 = [
      'sho_m_040323',
      'sho_m_040432',
      'sho_m_040433',
      'sho_m_040434',
      'sho_m_040435',
      'sho_m_040438',
      'sho_m_040441',
      'sho_m_040442',
      'sho_m_040443'
    ];
    elementShouldBeEnabled(enabledElements3);
  });
});
