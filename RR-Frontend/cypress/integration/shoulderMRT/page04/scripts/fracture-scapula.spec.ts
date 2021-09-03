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

  it('Fracture – Scapula', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);

    clickElement('sho_m_040206');
    const enabledElements1 = ['sho_m_040315', 'sho_m_040316', 'sho_m_040317', 'sho_m_040318', 'uni_04_003', 'uni_04_005', 'uni_04_007'];
    elementShouldBeEnabled(enabledElements1);

    clickElement('sho_m_040315');
    const enabledElements2 = ['sho_m_040422', 'sho_m_040423', 'sho_m_040424'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('sho_m_040316');
    const enabledElements3 = ['sho_m_040425', 'sho_m_040426', 'sho_m_040427'];
    elementShouldBeEnabled(enabledElements3);

    clickElement('sho_m_040317');
    const enabledElements4 = ['sho_m_040428', 'sho_m_040429', 'sho_m_040430'];
    elementShouldBeEnabled(enabledElements4);

    clickElement('sho_m_040318');
    const enabledElements5 = ['sho_m_0404208', 'sho_m_0404209'];
    elementShouldBeEnabled(enabledElements5);
  });
});
