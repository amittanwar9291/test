import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
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

  it('Synovia, mass_Charackterization I_I describe', () => {
    clickElement('hip_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('hip_m_060107');

    selectElementByRadioRole(3);

    elementShouldBeEnabled('hip_m_060214');

    elementShouldBeEnabled('hip_m_060216');
    elementShouldBeEnabled('hip_m_060217');

    elementShouldBeEnabled('hip_m_060311');
    elementShouldBeEnabled('hip_m_060314');
    elementShouldBeEnabled('hip_m_060317');

    elementShouldBeEnabled('hip_m_060320');
    elementShouldBeEnabled('hip_m_060321');

    elementShouldBeEnabled('hip_m_060408');
    elementShouldBeEnabled('hip_m_060409');
    elementShouldBeEnabled('hip_m_060410');

    elementShouldBeEnabled('hip_m_060413');
    elementShouldBeEnabled('hip_m_060416');

    elementShouldBeEnabled('hip_m_060502');
    elementShouldBeEnabled('hip_m_060503');

    clickElement('hip_m_060505', true, 'checkbox');
    clickElement('hip_m_060503', true, 'checkbox');

    elementShouldBeEnabled('hip_m_060504');
    elementShouldBeEnabled('hip_m_060505');
    elementShouldBeEnabled('hip_m_060506');
    elementShouldBeEnabled('hip_m_060507');
  });
});
