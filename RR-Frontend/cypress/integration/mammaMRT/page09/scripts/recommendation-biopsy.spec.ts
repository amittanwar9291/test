import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Recommendation biopsy', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Rating.url + '/' + pageId);
        });
      });
    });
  });

  describe('Recommendation Biopsy', () => {
    it('Biopsy', () => {
      clickElement('mam_m_090302', true, 'radio');
      elementShouldBeEnabled('mam_m_090405');
      elementShouldBeEnabled('mam_m_090406');
      elementShouldBeEnabled('mam_m_090407');
      elementShouldBeEnabled('mam_m_090408');
      elementShouldBeEnabled('mam_m_090401');
      elementShouldBeEnabled('mam_m_090402');
      elementShouldBeEnabled('mam_m_090403');
      clickElement('mam_m_090405', true, 'radio');
      clickElement('mam_m_090401', true, 'radio');
    });
  });
});
