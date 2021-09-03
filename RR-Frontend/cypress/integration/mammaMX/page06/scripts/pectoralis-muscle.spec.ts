import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 06 - MammaMX', () => {
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

  it('Pectoralis muscle', () => {
    clickElement('mam_mx_030401', false, 'checkbox');
    selectLocalizerElement('mam_mx_030403', 'path', 4, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    const enabledElements = ['mam_mx_060402', 'mam_mx_060403'];
    elementShouldBeEnabled(enabledElements);

    clickElement('mam_mx_060402');
    elementShouldBeDisabled('mam_mx_060405');
    clickElement('mam_mx_060403', true, 'radio');
    elementShouldBeEnabled('mam_mx_060405');

    selectLocalizerElement('mam_mx_060405', 'path', 2, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_060405', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.byRRID('mam_mx_060405')
      .shadowFind('path')
      .eq(2)
      .should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
