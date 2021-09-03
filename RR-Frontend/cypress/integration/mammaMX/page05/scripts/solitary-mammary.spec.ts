import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - MammaMX', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_050107', 'mam_mx_050106-');

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

  it('Solitary mammary', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('mam_mx_050105');
    elementShouldBeEnabled('mam_mx_050106-1');
    findingColumn.selectFindingOptionByAppearance(5);
    const enabledElements = [
      'mam_mx_050107',
      'mam_mx_050208',
      'mam_mx_050210',
      'mam_mx_050211',
      'mam_mx_050212',
      'mam_mx_050214',
      'mam_mx_050362',
      'mam_mx_050363',
      'mam_mx_050364',
      'mam_mx_050365',
      'mam_mx_050366',
      'mam_mx_050367',
      'mam_mx_050368',
      'mam_mx_050447'
    ];
    elementShouldBeEnabled(enabledElements);

    selectLocalizerElement('mam_mx_050208', 'path', 9, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 8, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.get('#leftBreast').should('have.css', 'pointer-events', 'none');

    selectDropdownOptionOS('mam_mx_050447', 3, false, true);
    elementShouldBeEnabled('mam_mx_050448');
    elementShouldBeEnabled('mam_mx_050450');

    selectDropdownOptionOS('mam_mx_050450', 3, false, true);
    elementShouldBeEnabled('mam_mx_050451');
  });
});
