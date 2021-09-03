import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 06 - Finding focus', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Diagnosis.url + '/' + pageId);
        });
      });
    });
  });

  it('Mamma_MRT(6)->focus_finding  ', () => {
    cy.byRRID('mam_m_060105').click();

    elementShouldBeEnabled('mam_m_060106-1');

    selectDropdownOptionOS('mam_m_060106-1', 1, true, true);
    elementShouldBeEnabled('mam_m_060215');
    elementShouldBeEnabled('mam_m_060111');

    cy.byRRID('mam_m_060215').type('4');

    elementShouldBeEnabled('uni_06_003');
    elementShouldBeEnabled('uni_06_005');

    cy.byRRID('uni_06_003').type('001');
    cy.byRRID('uni_06_005').type('001');
    elementShouldBeEnabled('mam_m_060218');
    selectLocalizerElement('mam_m_060218', 'path', 2, true);
    selectLocalizerElement('mam_m_060218', 'path', 10, true);
  });
});
