import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, elementShouldBeEnabled, clickElement, selectDropdownOptionOS } from '../../../../../../shared/service';
import { signIn } from '../../../../../../shared/requests';
import { createReport } from '../../../../../../shared/report-creation';
import { testUser } from '../../../../../../shared/test-usert';

context('Page 3 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  describe('Individual_DWI_without CM.spec', () => {
    it('Individual_DWI_without CM', () => {
      clickElement('uni_x_030110', true, 'radio');
      cy.byRRID('uni_x_030105').click({ force: true });

      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030112');
      elementShouldBeEnabled('uni_x_030113');
      elementShouldBeEnabled('uni_x_030210-1');
      elementShouldBeEnabled('uni_x_030509');

      elementShouldBeEnabled('uni_x_030520');
      elementShouldBeEnabled('uni_x_030521');
      elementShouldBeEnabled('hea_m_030503');
      elementShouldBeEnabled('hea_m_030502');
      elementShouldBeEnabled('hea_m_030501');

      elementShouldBeEnabled('uni_x_030524');
      selectDropdownOptionOS('uni_x_030210-1', 2, true, true);

      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      elementShouldBeEnabled('hea_m_030302');

      elementShouldBeEnabled('uni_x_030314');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeEnabled('uni_x_030316');

      elementShouldBeEnabled('hea_m_030401');
      elementShouldBeEnabled('hea_m_030402');
      elementShouldBeEnabled('hea_m_030403');

      elementShouldBeEnabled('uni_x_030415');
      elementShouldBeEnabled('uni_x_030419');

      elementShouldBeEnabled('hea_m_030405');
      elementShouldBeEnabled('hea_m_030406');
      elementShouldBeEnabled('uni_x_030431');
      clickElement('uni_x_030431', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030430');
      elementShouldBeEnabled('uni_x_030421');
    });
  });
});
