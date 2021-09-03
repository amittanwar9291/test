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
  describe('Clinic_Hearing impairment', () => {
    it('Clinic_Hearing impairment', () => {
      findingColumn.selectFindingOptionByAppearance(14);
      elementShouldBeEnabled('hea_m_020106');

      elementShouldBeEnabled('hea_m_020282');
      elementShouldBeEnabled('hea_m_020283');
      elementShouldBeEnabled('hea_m_020284');
      elementShouldBeEnabled('hea_m_020287');
      elementShouldBeEnabled('hea_m_020289');
      elementShouldBeEnabled('hea_m_020291');
      elementShouldBeEnabled('hea_m_020292');
      clickElement('hea_m_020284', true, 'checkbox');
      clickElement('hea_m_020287', true, 'checkbox');
      elementShouldBeEnabled('hea_m_020285');
      elementShouldBeEnabled('hea_m_020286');
      elementShouldBeEnabled('hea_m_020288');
    });
  });
});
