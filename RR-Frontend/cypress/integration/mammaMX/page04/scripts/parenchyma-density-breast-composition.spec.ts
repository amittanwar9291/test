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

  it('Parenchyma density', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);
    selectLocalizerElement('mam_mx_030111', 'path', 2, true);

    cy.wait(2000);
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });

    clickElement('mam_mx_040104');
    const enabledElements = [
      'mam_mx_040303',
      'mam_mx_040304',
      'mam_mx_040305',
      'mam_mx_040306',
      'mam_mx_040402',
      'mam_mx_040403',
      'mam_mx_040404',
      'mam_mx_040405'
    ];
    elementShouldBeEnabled(enabledElements);

    clickElement('mam_mx_040106');
    selectLocalizerElement('mam_mx_040107', 'path', 2, true);
    const disabledElements = ['mam_mx_040402', 'mam_mx_040403', 'mam_mx_040404', 'mam_mx_040405'];
    elementShouldBeDisabled(disabledElements);
    const enabledElements1 = ['mam_mx_040303', 'mam_mx_040304', 'mam_mx_040305', 'mam_mx_040306'];
    elementShouldBeEnabled(enabledElements1);

    selectLocalizerElement('mam_mx_040107', 'path', 4, true);
    const enabledElements2 = ['mam_mx_040402', 'mam_mx_040403', 'mam_mx_040404', 'mam_mx_040405'];
    elementShouldBeEnabled(enabledElements2);
    const disabledElements1 = ['mam_mx_040303', 'mam_mx_040304', 'mam_mx_040305', 'mam_mx_040306'];
    elementShouldBeDisabled(disabledElements1);
  });
});
