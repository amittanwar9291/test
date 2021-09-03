import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Hip page02 - Prior examinations', () => {
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

  describe('Prior examinations', () => {
    it('Prior examinations', () => {
      clickElement('hip_m_020407', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020409');
      elementShouldBeEnabled('hip_m_020410');

      clickElement('hip_m_020411', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020413');
      elementShouldBeEnabled('hip_m_020414');

      clickElement('hip_m_020415', false, 'checkbox');
      elementShouldBeEnabled('hip_m_020417');
      elementShouldBeEnabled('hip_m_020418');
    });
  });
});
