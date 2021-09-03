import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { clickElement } from '../../../../shared/service';

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
  describe('Clinic_Cranial nerves', () => {
    it('Clinic_Cranial nerves', () => {
      findingColumn.selectFindingOptionByAppearance(8);
      elementShouldBeEnabled('hea_m_020106');

      elementShouldBeEnabled('hea_m_020254');
      elementShouldBeEnabled('hea_m_020255');
      elementShouldBeEnabled('hea_m_020256');
      elementShouldBeEnabled('hea_m_020257');
      clickElement('hea_m_020254', true, 'radio');
      elementShouldBeEnabled('hea_m_020259');
      elementShouldBeEnabled('hea_m_020260');

      clickElement('hea_m_020255', true, 'radio');
      elementShouldBeEnabled('hea_m_020262');
      elementShouldBeEnabled('hea_m_020263');

      clickElement('hea_m_020256', true, 'radio');
      elementShouldBeEnabled('hea_m_0202112');
      elementShouldBeEnabled('hea_m_0202113');
      elementShouldBeEnabled('hea_m_0202114');
      elementShouldBeEnabled('hea_m_0202115');
      clickElement('hea_m_020257', true, 'radio');
      elementShouldBeEnabled('hea_m_020262');
      elementShouldBeEnabled('hea_m_020263');
    });
  });
});
