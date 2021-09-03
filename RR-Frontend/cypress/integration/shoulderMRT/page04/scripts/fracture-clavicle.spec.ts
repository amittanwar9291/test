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

  it('Fracture – Clavicle', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);
    const elements = ['sho_m_040107', 'sho_m_040202', 'sho_m_040204', 'sho_m_040206', 'sho_m_040207'];
    elementShouldBeEnabled(elements);

    clickElement('sho_m_040204');
    const elements2 = ['sho_m_040308', 'sho_m_040310', 'sho_m_040311', 'sho_m_040312', 'uni_04_003', 'uni_04_005', 'uni_04_007'];
    elementShouldBeEnabled(elements2);

    clickElement('sho_m_040308');
    const elements3 = ['sho_m_040414', 'sho_m_040415', 'sho_m_040416'];
    elementShouldBeEnabled(elements3);

    clickElement('sho_m_040310');
    const elements4 = ['sho_m_040417', 'sho_m_040418', 'sho_m_040419'];
    elementShouldBeEnabled(elements4);

    clickElement('sho_m_040311');
    const elements5 = ['sho_m_040420', 'sho_m_040421'];
    elementShouldBeEnabled(elements5);

    clickElement('sho_m_040312');
    const elements6 = ['sho_m_0404208', 'sho_m_0404209'];
    elementShouldBeEnabled(elements6);
  });
});
