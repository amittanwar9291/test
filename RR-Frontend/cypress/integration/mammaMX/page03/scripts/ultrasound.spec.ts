import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Technique', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Technique', () => {
    it('Ultrasound', () => {
      clickElement('mam_mx_030401', false, 'checkbox');
      cy.byRRID('mam_mx_030403')
        .shadowFind('tspan')
        .shadowClick();
      clickElement('mam_mx_030404', false, 'checkbox');
      clickElement('mam_mx_030406', false, 'checkbox');
      clickElement('mam_mx_030407', false, 'checkbox');
    });
  });
});
