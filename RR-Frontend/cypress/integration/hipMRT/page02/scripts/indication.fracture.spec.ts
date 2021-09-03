import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Hip page02 - Indication - Fracture', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_020106', 'hip_m_020105-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Indication - Fracture', () => {
    it('Fracture', () => {
      findingColumn.selectFindingOptionByName('Fracture');
      elementShouldBeEnabled('hip_m_020106');
      elementShouldBeEnabled('hip_m_020207');
      elementShouldBeEnabled('hip_m_020218');
      elementShouldBeEnabled('hip_m_020221');
      elementShouldBeEnabled('hip_m_020224');

      clickElement('hip_m_020218', false, 'checkbox');

      elementShouldBeEnabled('hip_m_020219');
      elementShouldBeEnabled('hip_m_020220');

      clickElement('hip_m_020221', false, 'checkbox');

      elementShouldBeEnabled('hip_m_020222');
      elementShouldBeEnabled('hip_m_020223');
    });
  });
});
