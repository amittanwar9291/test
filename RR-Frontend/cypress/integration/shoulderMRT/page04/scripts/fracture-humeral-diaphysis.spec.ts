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

  it('Fracture – Humeral diaphysis', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);

    clickElement('sho_m_040207');
    const enabledElements1 = ['sho_m_0403201', 'sho_m_0403202', 'sho_m_0403203', 'sho_m_0403204', 'uni_04_003', 'uni_04_005', 'uni_04_007'];
    elementShouldBeEnabled(enabledElements1);

    clickElement('sho_m_0403201');
    const enabledElements2 = ['sho_m_0404201', 'sho_m_0404202', 'sho_m_0404203'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('sho_m_0404201');
    const enabledElements3 = ['sho_m_0405201', 'sho_m_0405202', 'sho_m_0405203'];
    elementShouldBeEnabled(enabledElements3);

    clickElement('sho_m_0404202');
    const enabledElements4 = ['sho_m_0405201', 'sho_m_0405202', 'sho_m_0405203'];
    elementShouldBeEnabled(enabledElements4);

    clickElement('sho_m_0404203');
    const enabledElements5 = ['sho_m_0405201', 'sho_m_0405202', 'sho_m_0405203'];
    elementShouldBeEnabled(enabledElements5);

    clickElement('sho_m_0403202');
    const enabledElements6 = ['sho_m_0404204', 'sho_m_0404205'];
    elementShouldBeEnabled(enabledElements6);

    clickElement('sho_m_0404204');
    const enabledElements7 = ['sho_m_0405201', 'sho_m_0405202', 'sho_m_0405203'];
    elementShouldBeEnabled(enabledElements7);

    clickElement('sho_m_0404205');
    const enabledElements8 = ['sho_m_0405201', 'sho_m_0405202', 'sho_m_0405203'];
    elementShouldBeEnabled(enabledElements8);

    clickElement('sho_m_0403203');
    const enabledElements9 = ['sho_m_0404206', 'sho_m_0404207'];
    elementShouldBeEnabled(enabledElements9);

    clickElement('sho_m_0404206');
    const enabledElements10 = ['sho_m_0405204', 'sho_m_0405205', 'sho_m_0405206'];
    elementShouldBeEnabled(enabledElements10);

    clickElement('sho_m_0404207');
    const enabledElements11 = ['sho_m_0405204', 'sho_m_0405205', 'sho_m_0405206'];
    elementShouldBeEnabled(enabledElements11);

    clickElement('sho_m_0403204');
    const enabledElements12 = ['sho_m_0404208', 'sho_m_0404209'];
    elementShouldBeEnabled(enabledElements12);
  });
});
