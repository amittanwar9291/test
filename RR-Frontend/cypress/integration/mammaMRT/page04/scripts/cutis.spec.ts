import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 04 - Cutis', () => {
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

  it('Page 04 - Cutis', () => {
    clickElement('mam_m_040202');
    elementShouldBeDisabled('mam_m_040204');
    clickElement('mam_m_040203');
    elementShouldBeEnabled('mam_m_040204');
    selectLocalizerElement('mam_m_040204', 'path', 12, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 10, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 13, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 11, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_m_040204', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
