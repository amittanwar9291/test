import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Lungs mass', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Lymphs.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT radio button "Mass"', () => {
    it('THEN several elements are enabled', () => {
      clickElement('mam_m_070403');
      elementShouldBeEnabled('mam_m_0704100');
      elementShouldBeEnabled('mam_m_0704101');
      elementShouldBeEnabled('mam_m_070407');
      elementShouldBeEnabled('mam_m_070505');
      elementShouldBeEnabled('mam_m_070506');
      elementShouldBeEnabled('mam_m_070507');
      elementShouldBeEnabled('mam_m_070508');
      elementShouldBeEnabled('mam_m_070509');
      elementShouldBeEnabled('mam_m_070502');
      elementShouldBeEnabled('mam_m_070503');
      clickElement('mam_m_0704100');
      // @ts-ignore
      cy.byRRID('mam_m_070407')
        .click()
        .type('20');
      clickElement('mam_m_070503');
      clickElement('nav-header-btn-next');
    });
  });
});
