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

  it('Bone marrow edema – Characterization I - Lateral clavicle', () => {
    clickElement('sho_m_040105');
    findingColumn.selectFindingOptionByAppearance(1);
    clickElement('sho_m_0403206');
    const enabledElements = [
      'sho_m_0403208',
      'sho_m_0403209',
      'sho_m_0403210',
      'sho_m_0405208',
      'sho_m_0405209',
      'sho_m_0405210',
      'sho_m_0405211',
      'sho_m_0405212',
      'sho_m_0405214',
      'sho_m_0405215'
    ];
    elementShouldBeEnabled(enabledElements);
  });
});
