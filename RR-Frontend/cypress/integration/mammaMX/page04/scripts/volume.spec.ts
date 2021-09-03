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

  it('Volume', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);
    selectLocalizerElement('mam_mx_030111', 'path', 2, true);
    cy.visit(mammaMXRoutes.MammaMX_MammographyParenchymaAnatomy.url + '/' + pageId);
    clickElement('mam_mx_040104');
    elementShouldBeDisabled('mam_mx_040107');

    clickElement('mam_mx_040105');
    elementShouldBeEnabled('mam_mx_040107');

    selectLocalizerElement('mam_mx_040107', 'path', 2, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_040107', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.byRRID('mam_mx_040107')
      .shadowFind('path')
      .eq(2)
      .should('have.css', 'fill', 'rgb(255, 255, 255)');

    clickElement('mam_mx_040106');
    elementShouldBeEnabled('mam_mx_040107');
    cy.byRRID('mam_mx_040107')
      .shadowFind('path')
      .eq(2)
      .should('have.css', 'fill', 'rgb(255, 255, 255)');
    cy.byRRID('mam_mx_040107')
      .shadowFind('path')
      .eq(4)
      .should('have.css', 'fill', 'rgb(255, 255, 255)');

    selectLocalizerElement('mam_mx_040107', 'path', 2, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    const disabledElements = ['mam_mx_040402', 'mam_mx_040403', 'mam_mx_040404', 'mam_mx_040405'];
    elementShouldBeDisabled(disabledElements);

    selectLocalizerElement('mam_mx_040107', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.byRRID('mam_mx_040107')
      .shadowFind('path')
      .eq(2)
      .should('have.css', 'fill', 'rgb(255, 255, 255)');

    const enabledElements = ['mam_mx_040402', 'mam_mx_040403', 'mam_mx_040404', 'mam_mx_040405'];
    elementShouldBeEnabled(enabledElements);

    const disabledElements1 = ['mam_mx_040303', 'mam_mx_040304', 'mam_mx_040305', 'mam_mx_040306'];
    elementShouldBeDisabled(disabledElements1);
  });
});
