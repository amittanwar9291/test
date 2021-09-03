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

  it('Fracture – Proximal humerus - Neer classification', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);
    clickElement('sho_m_040202');

    clickElement('sho_m_040304');
    const enabledElements1 = ['sho_m_040406', 'sho_m_040407', 'sho_m_040408', 'sho_m_040409', 'sho_m_040410', 'sho_m_040411'];
    elementShouldBeEnabled(enabledElements1);

    clickElement('sho_m_040406');
    const enabledElements2 = ['sho_m_040512', 'sho_m_040513', 'sho_m_040514', 'sho_m_040515'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('sho_m_040408');
    const enabledElements3 = ['sho_m_040517', 'sho_m_040518', 'sho_m_040519'];
    elementShouldBeEnabled(enabledElements3);

    clickElement('sho_m_040409');
    const enabledElements4 = ['sho_m_040520', 'sho_m_040521', 'sho_m_040522'];
    elementShouldBeEnabled(enabledElements4);

    clickElement('sho_m_040410');
    const enabledElements5 = ['sho_m_040520', 'sho_m_040521', 'sho_m_040522'];
    elementShouldBeEnabled(enabledElements5);

    clickElement('sho_m_040411');
    const enabledElements6 = ['sho_m_040523', 'sho_m_040524'];
    elementShouldBeEnabled(enabledElements6);
  });
});
