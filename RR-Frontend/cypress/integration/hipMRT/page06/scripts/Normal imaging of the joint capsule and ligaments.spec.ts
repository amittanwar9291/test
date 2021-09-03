import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_CapsuleAndLigaments.url + '/' + pageId);
        });
      });
    });
  });

  it('Normal imaging of the joint capsule and ligaments', () => {
    clickElement('hip_m_060104', true, 'radio');

    cy.get('.button-next')
      .eq(0)
      .click({ force: true });
    clickElement('hip_m_070105', true, 'radio');
  });
});
