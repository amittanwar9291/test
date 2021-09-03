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

  it('Calcification', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('mam_mx_050105');
    elementShouldBeEnabled('mam_mx_050106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    const enabledElements = [
      'mam_mx_050208',
      'mam_mx_050107',
      'mam_mx_050210',
      'mam_mx_050211',
      'mam_mx_050212',
      'mam_mx_050213',
      'mam_mx_050319',
      'mam_mx_050322',
      'mam_mx_050323',
      'mam_mx_050324',
      'mam_mx_050325',
      'mam_mx_050326',
      'mam_mx_050328',
      'mam_mx_050416',
      'mam_mx_050417',
      'mam_mx_050418',
      'mam_mx_050419',
      'mam_mx_050420',
      'mam_mx_050421',
      'mam_mx_050511'
    ];
    elementShouldBeEnabled(enabledElements);

    selectLocalizerElement('mam_mx_050208', 'path', 9, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 8, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.get('#leftBreast').should('have.css', 'pointer-events', 'none');

    selectDropdownOptionOS('mam_mx_050511', 3, false, true);
    elementShouldBeEnabled('mam_mx_050512');
  });
});
