import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Hip page02 - Previous Interventions', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Previous Interventions', () => {
    it('Previous Interventions', () => {
      elementShouldBeEnabled('hip_m_020303');
      elementShouldBeEnabled('hip_m_020306');
      elementShouldBeEnabled('hip_m_020309');
      elementShouldBeEnabled('hip_m_020312');

      clickElement('hip_m_020303', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020304');
      elementShouldBeEnabled('hip_m_020305');

      clickElement('hip_m_020306', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020307');
      elementShouldBeEnabled('hip_m_020308');

      clickElement('hip_m_020309', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020310');
      elementShouldBeEnabled('hip_m_020311');

      clickElement('hip_m_020312', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020313');
      elementShouldBeEnabled('hip_m_020314');

      elementShouldBeEnabled('hip_m_020316');
      elementShouldBeEnabled('hip_m_020317');
    });
  });
});
