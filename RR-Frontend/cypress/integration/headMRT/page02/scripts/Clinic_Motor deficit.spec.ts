import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
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
  describe(' Clinic_Motor deficit', () => {
    it('Clinic_Motor deficit', () => {
      findingColumn.selectFindingOptionByAppearance(7);
      elementShouldBeEnabled('hea_m_020106');

      elementShouldBeEnabled('hea_m_020244');
      elementShouldBeEnabled('hea_m_020245');
      elementShouldBeEnabled('hea_m_020246');

      clickElement('hea_m_020246', true, 'radio');
      elementShouldBeEnabled('hea_m_020248');
      elementShouldBeEnabled('hea_m_020249');
      elementShouldBeEnabled('hea_m_020251');
      elementShouldBeEnabled('hea_m_020252');
    });
  });
});
