import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 2 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_020105', 'hea_m_020105-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });
  describe('Clinic_Pupil eyelid eye orbit', () => {
    it('Clinic_Pupil eyelid eye orbit', () => {
      findingColumn.selectFindingOptionByAppearance(15);
      elementShouldBeEnabled('hea_m_020106');

      elementShouldBeEnabled('hea_m_020294');
      elementShouldBeEnabled('hea_m_020295');
      elementShouldBeEnabled('hea_m_020296');
      elementShouldBeEnabled('hea_m_020297');
      elementShouldBeEnabled('hea_m_020298');
      elementShouldBeEnabled('hea_m_0202101');
      elementShouldBeEnabled('hea_m_0202102');
    });
  });
});
