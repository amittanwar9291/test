import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 04 - Subcutaneous Tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Anatomy.url + '/' + pageId);
        });
      });
    });
  });

  it('Page 04 - Subcutaneous tissue', () => {
    clickElement('mam_m_040402');
    elementShouldBeDisabled('mam_m_040404');
    clickElement('mam_m_040403');
    elementShouldBeEnabled('mam_m_040404');
    selectLocalizerElement('mam_m_040404', 'path', 12, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 10, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 13, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 11, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040404', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
