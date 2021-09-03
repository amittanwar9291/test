import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Muscles and Tendons', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_MusclesAndTendons.url + '/' + pageId);
        });
      });
    });
  });

  describe('Muscle, Tendons', () => {
    it('Tendons -> Normal imaging of muscles tendons and bursae', () => {
      clickElement('hip_m_070104', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('8')
        .click({ force: true });
      elementShouldBeEnabled('hip_m_080104');
      elementShouldBeEnabled('hip_m_080105');
    });
  });
});
