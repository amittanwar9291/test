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

  it('Fracture – Proximal humerus - AO classifikation (AO11)', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);
    const enabledElements1 = ['sho_m_040107', 'sho_m_040202', 'sho_m_040204', 'sho_m_040206', 'sho_m_040207'];
    elementShouldBeEnabled(enabledElements1);

    clickElement('sho_m_040202');
    const enabledElements2 = ['sho_m_040302', 'sho_m_040304', 'uni_04_003', 'uni_04_005', 'uni_04_007'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('sho_m_040302');
    const enabledElements3 = ['sho_m_040402', 'sho_m_040403', 'sho_m_040404', 'sho_m_040405'];
    elementShouldBeEnabled(enabledElements3);

    clickElement('sho_m_040402');
    const enabledElements4 = ['sho_m_040502', 'sho_m_040503', 'sho_m_040504'];
    elementShouldBeEnabled(enabledElements4);

    clickElement('sho_m_040403');
    const enabledElements5 = ['sho_m_040505', 'sho_m_040506', 'sho_m_040507'];
    elementShouldBeEnabled(enabledElements5);

    clickElement('sho_m_040404');
    const enabledElements6 = ['sho_m_040508', 'sho_m_040509', 'sho_m_040510'];
    elementShouldBeEnabled(enabledElements6);

    clickElement('sho_m_040405');
    const enabledElements7 = ['sho_m_0405237', 'sho_m_0405238'];
    elementShouldBeEnabled(enabledElements7);
  });
});
