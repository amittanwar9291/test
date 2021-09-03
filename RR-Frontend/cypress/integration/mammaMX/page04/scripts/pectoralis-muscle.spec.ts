import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 04 - MammaMX', () => {
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

  it('Pectoralis muscles', () => {
    clickElement('mam_mx_030105', true, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);
    selectLocalizerElement('mam_mx_030111', 'path', 2, true);
    cy.wait(2000);
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });

    elementShouldBeDisabled('mam_mx_040505');
    clickElement('mam_mx_040504');
    elementShouldBeEnabled('mam_mx_040505');
    selectLocalizerElement('mam_mx_040505', 'path', 2, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_040505', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
