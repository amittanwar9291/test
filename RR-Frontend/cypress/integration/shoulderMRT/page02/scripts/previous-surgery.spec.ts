import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('ShoulderMRT - page02 -  Previous surgery', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Total shoulder replacement', () => {
    clickElement('sho_m_020404', false, 'checkbox');
    elementShouldBeEnabled('sho_m_020405');
    elementShouldBeEnabled('sho_m_020406');
    elementShouldBeEnabled('sho_m_020407');
    clickElement('sho_m_020407', false, 'radio');
  });
});
