import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Hip page02 - Indication - Coxalgia', () => {
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

  describe('Indication - Coxalgia', () => {
    it('Coxalgia', () => {
      findingColumn.selectFindingOptionByName('Coxalgia');
      elementShouldBeEnabled('hip_m_020106');
      elementShouldBeEnabled('hip_m_020204');
      elementShouldBeEnabled('hip_m_020205');
    });
  });
});
